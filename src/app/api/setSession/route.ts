import { logout, refreshSession } from "@/lib";
import { validateToken } from "@/utils/userValidation";
import { isEmpty } from "lodash";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const allCookies = cookies();
  try {
    const user = await validateToken(data.access_token);
    if (!!user && !isEmpty(user)) {
      await refreshSession(data);
      return NextResponse.json({ data: user });
    } else {
      logout();
    }
  } catch (e) {
    logout();
    return NextResponse.json({ error: "Not a valid user" }, { status: 400 });
  }
}
