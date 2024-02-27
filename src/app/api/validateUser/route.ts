import { refreshSession } from "@/lib/lib";
import { validateToken } from "@/utils/userValidation";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const responseLoginRedirect = NextResponse.redirect(
    new URL("/login", request.url)
  );
  try {
    const token = cookies().get("access_token")?.value;
    if (!token) return responseLoginRedirect;
    const user = await validateToken(token);
    if (!user) return responseLoginRedirect;
    // eslint-disable-next-line camelcase
    refreshSession({ access_token: token });
    return NextResponse.json({ data: user });
  } catch (error) {
    return responseLoginRedirect;
  }
}
