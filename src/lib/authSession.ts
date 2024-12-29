/* eslint-disable camelcase */
"use server";
import { userInfoExtract } from "@/utils/extractInfoFromUserObject";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { validateToken } from "../utils/userValidation";

const secretKey = process.env.key;
const key = new TextEncoder().encode(secretKey);
const secondToStoreCookies = 90000;
/**
 * Encrypts the given payload using JWT.
 * @param payload - The data to be encrypted.
 * @returns A promise that resolves to the encrypted JWT.
 */
export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${secondToStoreCookies} sec from now`)
    .sign(key);
}

/**
 * Decrypts the input JWT token and returns the payload.
 * @param input - The JWT token to decrypt.
 * @returns A Promise that resolves to the payload of the decrypted JWT token.
 */
export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

/**
 * Stores user information data in cookies.
 * @param user - The user object containing the information to be stored.
 * @returns A promise that resolves when the user information data is successfully stored in cookies.
 */
export async function storeUserInfoDataInCookies(
  user: any,
  call: any = cookies()
) {
  const session = await encrypt(userInfoExtract(user));
  call.set("session", session, {
    httpOnly: true,
    expires: new Date(Date.now() + secondToStoreCookies * 1000),
  });
}

/**
 * Retrieves the session from the cookies and decrypts it.
 * @returns The decrypted session or null if no session is found.
 */
export async function getSession(call: any = cookies()) {
  const session = call.get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

/**
 * Logs out the user by destroying the session.
 */
export async function logout(call: any = cookies()) {
  // Destroy the session
  call.set("access_token", "", { expires: new Date(0) });
  call.set("revalidation", "", { expires: new Date(0) });
  call.set("session", "", { expires: new Date(0) });
  // redirect("/login");
}

/**
 * Refreshes the session by saving the session data in cookies.
 * @param data - The session data to be saved.
 * @param call - The object used to set the cookies. Defaults to the `cookies()` function.
 * @returns {Promise<void>} - A promise that resolves when the session is refreshed.
 */
export async function refreshSession(
  data: any,
  call: any = cookies()
): Promise<void> {
  const expires = new Date(Date.now() + secondToStoreCookies * 1000);
  const revalidationExpires = new Date(Date.now() + 6000 * 1000);

  //save the session in a cookie
  call.set("access_token", data.access_token, {
    expires,
    httpOnly: true,
    path: "/",
  });
  call.set("revalidation", "available", {
    expires: revalidationExpires,
    httpOnly: true,
    path: "/",
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
  const login = Response.redirect(new URL("/login", request.url));
  const shouldNotRevalidate = !!request.cookies.get("revalidation")?.value;
  if (shouldNotRevalidate) return;
  const accessToken = request.cookies.get("access_token")?.value;
  if (!accessToken) return login;
  try {
    const user = await validateToken(accessToken);
    if (!user) {
      logout();
      return login;
    }
    await storeUserInfoDataInCookies(user);
    await refreshSession({ access_token: accessToken });
    return;
  } catch (e) {
    logout();
    return login;
  }
}

export async function serverSideUserValidation(request: NextRequest) {
  const res = NextResponse.next();

  return res;
}
