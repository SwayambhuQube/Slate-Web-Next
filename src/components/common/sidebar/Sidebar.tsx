import { BroadcastOnHomeRounded, Campaign } from "@mui/icons-material";
import ArticleIcon from "@mui/icons-material/Article";
import BusinessIcon from "@mui/icons-material/Business";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import StorageIcon from "@mui/icons-material/Storage";
import SummarizeIcon from "@mui/icons-material/Summarize";
import Image from "next/image";
import Link from "next/link";
import logo from "@/media/qubeslate_min.png";

export const Sidebar: React.FC = () => (
  <div className="w-24 h-screen min-w-24 bg-[#171a1f]">
    <div className="h-16 bg-[#171a1f] flex justify-center items-center">
      <Image alt="qubeslate logo" src={logo} width={38} height={38} />
    </div>
    <hr className="h-0 border-solid border-1 border-[#7997f4] m-2" />
    <div className="flex flex-col justify-around items-center gap-5 py-1 text-white  ">
      <ul>
        <Link href="/">
          <li className="flex flex-col justify-center items-center py-1 text-[12px] w-full hover:translate-x-1 hover:text-[#7997f4] duration-150 ">
            <DashboardIcon />
            <span>Overview</span>
          </li>
        </Link>
      </ul>
      <ul>
        <Link className="" href="/">
          <li className="flex flex-col justify-center items-center py-1 text-[12px] w-full hover:translate-x-1 hover:text-[#7997f4] duration-150 ">
            <FactCheckIcon />
            <span>Approvals</span>
          </li>
        </Link>
      </ul>
      <ul>
        <Link className="" style={{ borderLeft: "#F5F8FA 5px" }} href="/">
          <li className="flex flex-col justify-center items-center py-1 text-[12px] w-full hover:translate-x-1 hover:text-[#7997f4] duration-150 ">
            <Campaign />
            <span>Campaigns</span>
          </li>
        </Link>
      </ul>
      <ul>
        <Link className="" style={{ borderLeft: "#F5F8FA 5px" }} href="/">
          <li className="flex flex-col justify-center items-center py-1 text-[12px] w-full hover:translate-x-1 hover:text-[#7997f4] duration-150 ">
            <BroadcastOnHomeRounded />
            <span>Show Failures</span>
          </li>
        </Link>
      </ul>
      <ul>
        <Link className="" href="/">
          <li className="flex flex-col justify-center items-center py-1 text-[12px] w-full hover:translate-x-1 hover:text-[#7997f4] duration-150 ">
            <SmartDisplayIcon />
            <span>Content</span>
          </li>
        </Link>
      </ul>
      <ul>
        <Link className="" href="/">
          <li className="flex flex-col justify-center items-center py-1 text-[12px] w-full hover:translate-x-1 hover:text-[#7997f4] duration-150 ">
            <BusinessIcon />
            <span>Companies</span>
          </li>
        </Link>
      </ul>
      <ul>
        <Link className="" href="/">
          <li className="flex flex-col justify-center items-center py-1 text-[12px] w-full hover:translate-x-1 hover:text-[#7997f4] duration-150 ">
            <StorageIcon />
            <span>Inventory</span>
          </li>
        </Link>
      </ul>
      <ul>
        <Link className="" href="/">
          <li className="flex flex-col justify-center items-center py-1 text-[12px] w-full hover:translate-x-1 hover:text-[#7997f4] duration-150 ">
            <FolderCopyIcon />
            <span>Catalogue</span>
          </li>
        </Link>
      </ul>
      <ul>
        <Link className="" href="/">
          <li className="flex flex-col justify-center items-center py-1 text-[12px] w-full hover:translate-x-1 hover:text-[#7997f4] duration-150 ">
            <ArticleIcon />
            <span>Play Logs</span>
          </li>
        </Link>
      </ul>
      <ul>
        <Link className="" href="/">
          <li className="flex flex-col justify-center items-center py-1 text-[12px] w-full hover:translate-x-1 hover:text-[#7997f4] duration-150 ">
            <SummarizeIcon />
            <span>Reports</span>
          </li>
        </Link>
      </ul>
      <ul>
        <Link className="" href="/">
          <li className="flex flex-col justify-center items-center py-1 text-[12px] w-full hover:translate-x-1 hover:text-[#7997f4] duration-150 ">
            <FormatListBulletedIcon />
            <span>Lists</span>
          </li>
        </Link>
      </ul>
    </div>
  </div>
);
