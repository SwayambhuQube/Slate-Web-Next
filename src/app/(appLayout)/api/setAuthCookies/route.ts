import { validateToken } from "@/utils/userValidation";
import { isEmpty } from "lodash";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const path = request.nextUrl.pathname;
  const cookiesToSet = [
    {
      name: "token",
      value: data.access_token,
      path: path,
      httpOnly: true,
    },
    {
      name: "expires",
      value: data.expires_in,
      path: path,
      httpOnly: true,
    },
  ];
  const User = await validateToken(data.access_token);
  if (!isEmpty(User)) {
    cookiesToSet.forEach((c) => {
      cookies().set(c);
    });
    return NextResponse.json({ data: User });
  }

  return NextResponse.json({ error: "Not a valid user" }, { status: 400 });
}
