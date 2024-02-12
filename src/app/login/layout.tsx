import { SlateLogo } from "../../../public/assets";
import Image from "next/image";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
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
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
