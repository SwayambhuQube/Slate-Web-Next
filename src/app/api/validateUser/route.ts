import { refreshSession, storeUserInfoDataInCookies } from "@/lib/authSession";
import { validateToken } from "@/utils/userValidation";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const token = cookies().get("access_token")?.value;
    if (!token) return redirect("/login");
    const user = await validateToken(token);
    if (!user) return redirect("/login");
    await storeUserInfoDataInCookies(user);
    // eslint-disable-next-line camelcase
    refreshSession({ access_token: token });
    return NextResponse.json({ data: user });
  } catch (error) {
    return redirect("/login");
  }
}
