import { cn } from "@/lib/twutils";
import Providers from "@/providers";
import type { Metadata } from "next";
import { Commissioner } from "next/font/google";
import "./(appLayout)/globals.css";
import { cookies } from "next/headers";

const commissioner = Commissioner({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-Commissioner",
});

export const metadata: Metadata = {
  title: "slate-web-next",
  description: "Generated by create next app",
};
const isAdminApp = !!process.env.NEXT_PUBLIC_REACT_APP_IS_ADMIN_APP;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={isAdminApp ? " " : "user"}>
      <body
        className={cn(
          "w-screen h-full bg-background font-commissioner antialiased ",
          commissioner.variable
        )}
      >
        <div className="flex w-full h-full">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
