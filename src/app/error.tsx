"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SlateLogo } from "../../public/assets";

export default function Component({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div
      key="1"
      className="m-4 w-full h-full rounded-lg p-4 bg-gradient-to-br from-[#0a5ecc] to-[#475566] animate-gradient dark:bg-gradient-to-br dark:from-[#0a5ecc] dark:to-[#475566] dark:animate-gradient"
    >
      <div className="flex flex-col items-center justify-center w-full min-h-[400px] gap-2 text-center">
        <Image
          alt="Qube Cinema"
          className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
          height="120"
          src={SlateLogo}
          width="240"
        />
        <div className="space-y-2">
          <div className="space-y-2">
            <h1 className="text-3xl text-white font-bold tracking-tighter sm:text-5xl">
              Something went wrong
              {/* Error message: {error.message} */}
            </h1>
            <p className="text-white mx-auto max-w-[400px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {"Don't worry, we'll take you back to the Qube Cinema homepage."}
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              className="inline-flex h-10 items-center rounded-md bg-qube px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="/dashboard"
            >
              Go back to Qube Cinema Home
            </Link>
            <Button
              onClick={reset}
              className="ml-4 inline-flex h-10 items-center rounded-md bg-qube px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            >
              Retry
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
