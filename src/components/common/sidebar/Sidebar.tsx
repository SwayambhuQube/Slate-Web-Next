"use client";
import {
  SlateLogo,
  SlateLogoSmall,
  QubeLogoSmall,
} from "../../../../public/assets";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PushPinIcon from "@mui/icons-material/PushPin";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import ArticleIcon from "@mui/icons-material/Article";
import InfoIcon from "@mui/icons-material/Info";
import { sideBarItems } from "@/constants/SideBar/sidebarconfig";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

const InfoConfig = [
  {
    link: "https://www.qubecinema.com/about-us",
    name: "About us",
    icon: (
      <Image alt="" src={QubeLogoSmall} className="text-navbarForeground" />
    ),
  },
  {
    link: "https://www.qubecinema.com/privacy-policy",
    name: "Privacy policy",
    icon: <PrivacyTipIcon />,
  },
  {
    link: "https://www.qubecinema.com/terms-use",
    name: "Terms of Service",
    icon: <ArticleIcon />,
  },
];
export const Sidebar: React.FC = () => {
  const [onHover, setOnHover] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  const handleMouseEnter = () => {
    setOnHover(true);
  };
  const handleMouseLeave = () => {
    if (!isPinned) setOnHover(false);
  };

  return (
    <div
      className="h-full min-h-screen"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`${
          onHover ? "w-64" : "w-24"
        } bg-navbar tracking-wide border-border border-solid border-r  h-screen  flex flex-col justify-around  overflow-hidden ${
          onHover && !isPinned ? "absolute left-0 top-0" : ""
        }`}
      >
        <div className="h-20 min-h-20 w-full flex justify-center items-center border-solid border-b border-border ">
          <Image
            alt="qubeslate logo"
            className={onHover ? "" : "hidden"}
            src={SlateLogo}
          />
          <Image
            alt="qubeslate logo"
            className={onHover ? "hidden" : ""}
            src={SlateLogoSmall}
          />
        </div>
        <div
          className="w-full   flex flex-col justify-items-start items-center overflow-y-scroll "
          style={{ maxHeight: "calc(100vh - 200px)" }}
        >
          <div
            className={`${
              onHover ? "" : "hidden"
            } w-full flex flex-col text-navbarForeground justify-start items-center gap-1 py-1`}
          >
            {sideBarItems.map((item, i) => (
              <Accordion key={i} type="single" collapsible className=" w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="mx-2">
                    <div className="mx-2  font-semibold text-sm leading-5">
                      <item.iconComponent className="mx-2 scale-75" />
                      {item.name}
                    </div>
                  </AccordionTrigger>
                  {item.dropdownItems &&
                    item.dropdownItems.map((item, i) => (
                      <AccordionContent
                        className="mx-4 font-normal text-sm leading-5 "
                        key={i}
                      >
                        <Button
                          variant={"ghost"}
                          size={"sm"}
                          className="w-full justify-start"
                        >
                          {item}
                        </Button>
                      </AccordionContent>
                    ))}
                </AccordionItem>
              </Accordion>
            ))}
          </div>
          <div
            className={`${
              onHover ? "hidden" : ""
            } w-full flex flex-col text-navbarForeground justify-start items-center gap-1 py-1  `}
          >
            {sideBarItems.map((item) => (
              <Link href={item.href} key={item.name}>
                <li className="flex flex-col justify-center items-center py-1 text-[12px] w-full my-4 mx">
                  <div className="h-6 w-6 scale-75">
                    <item.iconComponent />
                  </div>
                  <span className="font-normal text-sm leading-5">
                    {item.name}
                  </span>
                </li>
              </Link>
            ))}
          </div>
        </div>
        <div className="h-24 w-full bg-navbar border-border border-solid border-t">
          <div
            className={` w-full flex flex-col text-navbarForeground justify-start items-center gap-2 py-2 ${
              onHover ? "" : ""
            }`}
          >
            <div className="w-full flex justify-around">
              {onHover && (
                <div
                  onClick={() => setIsPinned((p) => (p ? false : true))}
                  className="flex justify-center items-center mx-2  rounded-sm bg-primary h-10 w-14 p-1"
                >
                  <PushPinIcon
                    className={
                      isPinned ? "cursor-pointer" : "cursor-pointer rotate-45"
                    }
                  />
                </div>
              )}
              <div
                className={`w-full flex  gap-3 text-navbarForeground mx ${
                  onHover ? " justify-start" : "justify-center"
                }`}
              >
                {!onHover && (
                  <Avatar>
                    <AvatarFallback className="bg-navbar border border-solid border-border  text-navbarForeground">
                      SPP
                    </AvatarFallback>
                  </Avatar>
                )}
                {onHover && (
                  <div className="flex flex-col">
                    <div className="font-semibold">Swayambhu</div>
                    <div className="text-xs">Qube Cinema .inc</div>
                  </div>
                )}
              </div>
              {onHover && (
                <Popover>
                  <PopoverTrigger>
                    <KeyboardArrowUpIcon />
                  </PopoverTrigger>
                  <PopoverContent className=" h-14 w-32 text-center bg-transparent border-0 shadow-none">
                    <Button
                      variant={"destructive"}
                      className="text-navbarForeground font-semibold"
                    >
                      Sign Out
                      <ExitToAppIcon className="h-4 w-4 mx-2" />
                    </Button>
                  </PopoverContent>
                </Popover>
              )}
            </div>
            <div className="w-full flex justify-start gap-1 ml-4">
              <Button
                variant={"ghost"}
                size={"sm"}
                className="text-navbarForeground"
              >
                <HeadsetMicIcon className="mx-2" />
                Help
              </Button>
              {onHover && (
                <Popover>
                  <PopoverTrigger>
                    <InfoIcon className="mx" />
                    info
                  </PopoverTrigger>
                  <PopoverContent className="flex flex-col justify-start text-start w-fit h-fit p-0 border-0">
                    {InfoConfig.map((icon, i) => (
                      <Button
                        variant={"default"}
                        className="text-navbarForeground font-semibold rounded-none"
                        key={i}
                      >
                        {icon.icon}
                        <Link
                          href={icon.link}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {icon.name}
                        </Link>
                      </Button>
                    ))}
                  </PopoverContent>
                </Popover>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
