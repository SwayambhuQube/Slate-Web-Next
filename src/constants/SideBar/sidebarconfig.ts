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
export const sideBarItems = [
  {
    name: "Overview",
    iconComponent: DashboardIcon,
    href: "/Overview",
  },
  {
    name: "Approvals",
    iconComponent: FactCheckIcon,
    href: "/",
  },
  {
    name: "Campaigns",
    iconComponent: Campaign,
    href: "/campaigns",
  },
  {
    name: "Show Failures",
    iconComponent: BroadcastOnHomeRounded,
    href: "/",
  },
  {
    name: "Content",
    iconComponent: SmartDisplayIcon,
    href: "/",
  },
  {
    name: "Companies",
    iconComponent: BusinessIcon,
    href: "/",
  },
  {
    name: "Inventory",
    iconComponent: StorageIcon,
    href: "/",
  },
  {
    name: "Catalogue",
    iconComponent: FolderCopyIcon,
    href: "/",
  },
  {
    name: "Play Logs",
    iconComponent: ArticleIcon,
    href: "/",
  },
  {
    name: "Reports",
    iconComponent: SummarizeIcon,
    href: "/",
  },
  {
    name: "Lists",
    iconComponent: FormatListBulletedIcon,
    href: "/",
  },
];
