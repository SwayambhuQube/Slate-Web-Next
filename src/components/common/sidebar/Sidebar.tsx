import Image from "next/image";
import Link from "next/link";
import logo from "@/media/qubeslate_min.png";
import { sideBarItems } from "@/constants/SideBar/sidebarconfig";

export const Sidebar: React.FC = () => (
  <div className="w-24 h-fit min-h-screen min-w-24 bg-[#171a1f]">
    <div className="h-16 bg-[#171a1f] flex justify-center items-center">
      <Image alt="qubeslate logo" src={logo} width={38} height={38} />
    </div>
    <hr className="h-0 border-solid border-1 border-[#7997f4] m-2" />
    <div className="flex flex-col justify-around items-center gap-5 py-1 text-white  ">
      {sideBarItems.map((item) => (
        <Link href={item.href} key={item.name}>
          <li className="flex flex-col justify-center items-center py-1 text-[12px] w-full hover:translate-x-1 hover:text-[#7997f4] duration-150 ">
            <item.iconComponent />
            <span>{item.name}</span>
          </li>
        </Link>
      ))}
    </div>
  </div>
);
