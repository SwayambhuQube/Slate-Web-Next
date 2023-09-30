import Image from "next/image";
import Link from "next/link";
import logo from "@/media/qubeslate_min.png";
import { sideBarItems } from "@/constants/SideBar/sidebarconfig";

export const Sidebar: React.FC = () => (
  <div className="w-24 h-fit min-h-screen min-w-24 bg-skin-sidebar-bg tracking-wide">
    <div className="h-16 flex justify-center items-center">
      <Image alt="qubeslate logo" src={logo} width={38} height={38} />
    </div>
    <hr className="h-0 border-solid border-1 border-skin-sidebar-underline m-2" />
    <div className="flex flex-col justify-around items-center gap-5 py-1 text-skin-sidebar-text  ">
      {sideBarItems.map((item) => (
        <Link href={item.href} key={item.name}>
          <li className="flex flex-col justify-center items-center py-1 text-[12px] w-full hover:translate-x-1 hover:text-skin-sidebar-icon-hover duration-150 ">
            <item.iconComponent />
            <span>{item.name}</span>
          </li>
        </Link>
      ))}
    </div>
  </div>
);
