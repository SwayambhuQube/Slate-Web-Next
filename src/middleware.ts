import { NextRequest } from "next/server";
import { updateSession } from "./lib/lib";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|login|auth|.*\\.png$).*)"],
};
