import { isEmpty } from "lodash";
import { NextRequest, NextResponse } from "next/server";
import { COMPANY_STATUS, CUSTOMER_SEGMENT } from "./constants";
import { Message } from "./constants/emptyPage/messagetypes";
import {
  getSession,
  logout,
  refreshSession,
  storeUserInfoDataInCookies,
} from "./lib/authSession";
import { validateToken } from "./utils/userValidation";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const login = NextResponse.redirect(new URL("/login", request.url));

  const sessionUser = await getSession(request.cookies);
  if (!sessionUser || isEmpty(sessionUser)) {
    logout(response.cookies);
    return login;
  }

  // Determine if it is currently running as Slate Admin App
  const isAdminApp = !!process.env.NEXT_PUBLIC_REACT_APP_IS_ADMIN_APP;
  // Determine if current user is part of Slate Admin Company
  const isSlateAdminCompanyUser =
    sessionUser.company.customerSegment.code === CUSTOMER_SEGMENT.SLATE_ADMIN;
  if (!request.nextUrl.pathname.startsWith("/unauthorized")) {
    const redirectResponse = new URL("/unauthorized", request.url);
    let Heading: Message = "";
    let Message: Message = "";
    // If a Non Slate Admin user logs in to Admin App, do not allow them access and show error
    // NOTE: All navigation items need to be hidden as well, check should be in NavigationBar

    if (
      isAdminApp &&
      !isSlateAdminCompanyUser &&
      !request.nextUrl.pathname.startsWith("/unauthorized")
    ) {
      // TODO: Might need to add a button to user app and/or a logout button
      Heading = "adminAppHeading";
      Message = "adminAppMessage";
      redirectResponse.searchParams.set(Heading, Message);
      return NextResponse.redirect(redirectResponse);
    }

    // Vice-Versa as above. Slate Admin logs in to User App
    if (!isAdminApp && isSlateAdminCompanyUser) {
      Heading = "userAppHeading";
      Message = "userAppMessage";
      redirectResponse.searchParams.set(Heading, Message);
      return NextResponse.redirect(redirectResponse);
    }
    // Check if user's company is approved by Slate Admin. If pending, do not show anything until approved.
    if (sessionUser.company.status === COMPANY_STATUS.PENDING) {
      Heading = "waitingApprovalHeading";
      Message = "waitingApprovalMessage";
      redirectResponse.searchParams.set(Heading, Message);
      return NextResponse.redirect(redirectResponse);
    }
    // Check if the user has roles before the scope check, as sometimes they would have been removed
    if (sessionUser.roles.length === 0) {
      Heading = "noRolesHeading";
      Message = "noRolesMessage";
      redirectResponse.searchParams.set(Heading, Message);
      return NextResponse.redirect(redirectResponse);
    }
  }
  //Update the session based on the provided request
  const shouldNotRevalidate = !!request.cookies.get("revalidation")?.value;
  if (shouldNotRevalidate) return response;
  const accessToken = request.cookies.get("access_token")?.value;

  if (!accessToken) return login;
  try {
    const user = await validateToken(accessToken);
    if (!user) {
      logout(login.cookies);
      return login;
    }
    await storeUserInfoDataInCookies(user, response.cookies);
    await refreshSession({ access_token: accessToken }, response.cookies);
  } catch (e) {
    logout(login.cookies);
    return login;
  }

  return response;
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|login|auth|.*\\.png$).*)"],
};
