import { BroadcastOnHomeRounded, Campaign } from "@mui/icons-material";
import ArticleIcon from "@mui/icons-material/Article";
import BusinessIcon from "@mui/icons-material/Business";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
export const sideBarItems = [
  {
    name: "Schedules",
    iconComponent: DashboardIcon,
    href: "/schedules",
    dropdownItems: ["Schedule Orders"],
  },
  {
    name: "Compositions",
    iconComponent: SmartDisplayIcon,
    href: "/composition",
    dropdownItems: ["Compositions"],
  },
  {
    name: "Campaigns",
    iconComponent: Campaign,
    href: "/campaigns",
    dropdownItems: ["Campaigns"],
  },
  {
    name: "Approval",
    iconComponent: BroadcastOnHomeRounded,
    href: "/approval",
    dropdownItems: ["Campaign Approvals", "Brand Verifications"],
  },
  {
    name: "Content",
    iconComponent: SmartDisplayIcon,
    href: "/content",
    dropdownItems: ["Unmapped CPLs", "Content", "Archived Content"],
  },
  {
    name: "Inventory",
    iconComponent: BusinessIcon,
    href: "/inventory",
    dropdownItems: ["Theaters/Screen", "Playlist Templates"],
  },
  {
    name: "Companies",
    iconComponent: FolderCopyIcon,
    href: "/companies",
    dropdownItems: ["Sellers", "Buyers"],
  },
  {
    name: "Catalogue",
    iconComponent: FolderCopyIcon,
    href: "/catalogue",
    dropdownItems: ["Brands", "Movies"],
  },
  {
    name: "Other",
    iconComponent: ArticleIcon,
    href: "/other",
    dropdownItems: ["Lists"],
  },
];
