import {
  SlateAdminLogoSignin,
  SlateLogo,
  LoginBanner,
} from "../../../public/assets";
import Image from "next/image";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAdminApp = !!process.env.NEXT_PUBLIC_REACT_APP_IS_ADMIN_APP;
  return (
    <div>
      {isAdminApp ? (
        <div className="h-screen w-screen flex justify-center items-center bg-[#052f66]">
          <div className=" min-w-[310px] h-fit max-w-[510px] p-10 mx-10 bg-white rounded-lg">
            <div className="w-full flex justify-center items-center">
              <Image
                className="my-2"
                src={SlateAdminLogoSignin}
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
            <div className="w-full px-1 flex justify-center items-center">
              {children}
            </div>
          </div>
        </div>
      ) : (
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
                marketplace to allow Advertisers, Media Agencies and Exhibitors
                to plan campaigns, target content to specific theatres, and
                schedule content at the theatres for playback.
              </p>
            </div>
            <div className="">
              <Image className="my-2" src={LoginBanner} alt="no logo" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
