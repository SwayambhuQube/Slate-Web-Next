import Image from "next/image";
import { LoginBanner, SlateLogo } from "../../../../public/assets";

export default function UserApp({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen bg-[#052f66] px-10">
      <div className="w-full flex h-20 justify-between lg:gap-96 md:gap-48 sm:gap-20 items-center">
        <div>
          <Image
            className="my-2"
            src={SlateLogo}
            height={32}
            width={225}
            alt="no logo"
          />
        </div>
        {children}
      </div>
      <div
        className="w-full mt-20 md:flex
           justify-around lg:gap-40 md:gap-20 sm:gap-10 items-center text-white"
      >
        <div className="mt-20">
          <div className="text-6xl max-w-xl mb-8">
            Taking your Ads to the Cinemas of your choice
          </div>
          <p className="max-w-3xl">
            Qube Slate is a content scheduling platform that acts as a
            marketplace to allow Advertisers, Media Agencies and Exhibitors to
            plan campaigns, target content to specific theatres, and schedule
            content at the theatres for playback.
          </p>
        </div>
        <div className="">
          <Image className="my-2" src={LoginBanner} alt="no logo" />
        </div>
      </div>
    </div>
  );
}
