"use client";
import { SlateLogo } from "@/assets";
import { createQueryString } from "@/utils/queryString";
import Image from "next/image";
import { useRouter } from "next/navigation";

const QA_CLIENT_ID = "7079f5e5754c4471aa01b09e81675335";
const QA_PRODUCT_ID = "e742fd40-86c4-4d65-9b62-9db7f75e365f";
const QA_BASE_URL = "https://account.staging.qube.in/";
export default function Login() {
  const router = useRouter();

  const login = () => {
    const url = `${QA_BASE_URL}dialog/authorize?${createQueryString({
      client_id: QA_CLIENT_ID,
      product_id: QA_PRODUCT_ID,
      redirect_uri: "http://localhost:3000/auth",
      response_type: "token",
    })}`;
    router.push(url);
  };
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center bg-[#052f66]">
        <div className=" min-w-[310px] h-fit max-w-[510px] p-10 mx-10 bg-white rounded-lg">
          <div>
            <Image
              className="my-6"
              src={SlateLogo}
              height={32}
              width={225}
              alt="no logo"
            />
          </div>
          <div className="my-6 text-center text-[#69788c] text-sm">
            Qube Slate is a content scheduling platform that acts as a
            marketplace to allow Advertisers, Media Agencies and Exhibitors to
            plan campaigns, target content to specific theatres, and schedule
            content at the theatres for playback.
          </div>
          <div className="w-full flex justify-center items-center">
            <button
              className="min-h-12 min-w-[310px] text-white bg-[#052f66] p-4 rounded-lg mx-2"
              onClick={login}
            >
              Signin
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
