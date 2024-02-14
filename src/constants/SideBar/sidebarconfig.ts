import {
  BookImage,
  Building2,
  CalendarCheck,
  Database,
  FileStack,
  Film,
  Megaphone,
  Newspaper,
  PlaySquare,
} from "lucide-react";
export const sideBarItems = [
  {
    name: "Schedules",
    iconComponent: CalendarCheck,
    href: "/schedules",
    dropdownItems: ["Schedule Orders"],
  },
  {
    name: "Compositions",
    iconComponent: Film,
    href: "/composition",
    dropdownItems: ["Compositions"],
  },
  {
    name: "Campaigns",
    iconComponent: Megaphone,
    href: "/campaigns",
    dropdownItems: ["Campaigns"],
  },
  {
    name: "Approval",
    iconComponent: FileStack,
    href: "/approval",
    dropdownItems: ["Campaign Approvals", "Brand Verifications"],
  },
  {
    name: "Content",
    iconComponent: PlaySquare,
    href: "/content",
    dropdownItems: ["Unmapped CPLs", "Content", "Archived Content"],
  },
  {
    name: "Inventory",
    iconComponent: Database,
    href: "/inventory",
    dropdownItems: ["Theaters/Screen", "Playlist Templates"],
  },
  {
    name: "Companies",
    iconComponent: Building2,
    href: "/companies",
    dropdownItems: ["Sellers", "Buyers"],
  },
  {
    name: "Catalogue",
    iconComponent: BookImage,
    href: "/catalogue",
    dropdownItems: ["Brands", "Movies"],
  },
  {
    name: "Other",
    iconComponent: Newspaper,
    href: "/other",
    dropdownItems: ["Lists"],
  },
];
