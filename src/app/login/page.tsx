/* eslint-disable camelcase */
import { QA_BASE_URL, QA_CLIENT_ID, QA_PRODUCT_ID } from "@/config";
import { createQueryString } from "@/utils/queryString";
import { redirect } from "next/navigation";

export async function login(redirect: (url: string) => void) {
  const url = `${QA_BASE_URL}dialog/authorize?${createQueryString({
    client_id: QA_CLIENT_ID,
    product_id: QA_PRODUCT_ID,
    redirect_uri: "http://localhost:3000/auth",
    response_type: "token",
  })}`;

  redirect(url);
}
export default function Login() {
  return (
    <form
      action={async () => {
        "use server";
        await login(redirect);
      }}
    >
      <button
        className="min-h-12 min-w-[310px] text-white bg-[#052f66] p-4 rounded-lg mx-2"
        type="submit"
      >
        Sign in
      </button>
    </form>
  );
}
