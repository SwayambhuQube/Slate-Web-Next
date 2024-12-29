import {
  logout,
  refreshSession,
  storeUserInfoDataInCookies,
} from "@/lib/authSession";
import { validateToken } from "@/utils/userValidation";
import { isEmpty } from "lodash";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  try {
    const user = await validateToken(data.access_token);
    if (!isEmpty(user)) {
      await storeUserInfoDataInCookies(user);
      await refreshSession(data);
      return NextResponse.json({ data: user });
    } else {
      return NextResponse.json({ error: "Not a valid user" }, { status: 400 });
    }
  } catch (e) {
    return NextResponse.json({ error: "Not a valid user" }, { status: 500 });
  }
}
