/* eslint-disable camelcase */
"use server";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { validateToken } from "./utils/userValidation";
import { redirect } from "next/navigation";

/**
 * Logs out the user by destroying the session.
 */
export async function logout() {
  // Destroy the session
  cookies().set("access_token", "", { expires: new Date(0) });
  cookies().set("revalidation", "", { expires: new Date(0) });
  redirect("/login");
}

// export async function getSession() {
//   const session = cookies().get("session")?.value;
//   if (!session) return null;
//   return await decrypt(session);
// }

/**
 * Refreshes the session by saving the session data in cookies.
 * @param data - The session data to be saved.
 * @param call - The object used to set the cookies. Defaults to the `cookies()` function.
 * @returns {Promise<void>} - A promise that resolves when the session is refreshed.
 */
export async function refreshSession(data: any, call: any = cookies()) {
  const expires = new Date(Date.now() + 900 * 1000);
  const revalidationExpires = new Date(Date.now() + 600 * 1000);

  //save the session in a cookie
  call.set("access_token", data.access_token, {
    expires,
    httpOnly: true,
  });
  call.set("revalidation", "available", {
    expires: revalidationExpires,
    httpOnly: true,
  });
}

/**
 * Updates the session based on the provided request.
 * If the session is valid, it refreshes the session and returns the response.
 * If the session is invalid, it logs out the user and redirects to the login page.
 * If revalidation is disabled, it returns the response without refreshing the session.
 * @param request The NextRequest object containing the request details.
 * @returns The NextResponse object representing the updated session response.
 */
export async function updateSession(request: NextRequest) {
  const res = NextResponse.next();
  const login = NextResponse.redirect(new URL("/login", request.url));
  const shouldNotRevalidate = !!request.cookies.get("revalidation")?.value;
  if (shouldNotRevalidate) return res;
  const accessToken = request.cookies.get("access_token")?.value;
  if (!accessToken) return login;
  try {
    const user = await validateToken(accessToken);
    if (!user) {
      logout();
      return login;
    }
    refreshSession({ access_token: accessToken }, res.cookies);
    return res;
  } catch (e) {
    logout();
    return login;
  }
}
