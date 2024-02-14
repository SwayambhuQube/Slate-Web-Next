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
    dropdownItems: [{ name: "Schedule Orders", href: "/schedules" }],
  },
  {
    name: "Compositions",
    iconComponent: Film,
    href: "/composition",
    dropdownItems: [{ name: "Compositions", href: "/composition" }],
  },
  {
    name: "Campaigns",
    iconComponent: Megaphone,
    href: "/campaigns",
    dropdownItems: [{ name: "Campaigns", href: "/campaigns" }],
  },
  {
    name: "Approval",
    iconComponent: FileStack,
    href: "/approval",
    dropdownItems: [
      { name: "Campaign Approvals", href: "/campaign-approval" },
      { name: "Brand Verifications", href: "/brand-verification" },
    ],
  },
  {
    name: "Content",
    iconComponent: PlaySquare,
    href: "/content",
    dropdownItems: [
      { name: "Unmapped CPLs", href: "/unmapped-cpls" },
      { name: "Content", href: "/content" },
      { name: "Archived Content", href: "/archived-content" },
    ],
  },
  {
    name: "Inventory",
    iconComponent: Database,
    href: "/inventory",
    dropdownItems: [
      { name: "Theaters/Screen", href: "/theaters" },
      { name: "Playlist Templates", href: "/playlist-templates" },
    ],
  },
  {
    name: "Companies",
    iconComponent: Building2,
    href: "/companies",
    dropdownItems: [
      { name: "Sellers", href: "/sellers" },
      { name: "Buyers", href: "/buyers" },
    ],
  },
  {
    name: "Catalogue",
    iconComponent: BookImage,
    href: "/catalogue",
    dropdownItems: [
      { name: "Brands", href: "/brands" },
      { name: "Movies", href: "/movies" },
    ],
  },
  {
    name: "Other",
    iconComponent: Newspaper,
    href: "/other",
    dropdownItems: [{ name: "Lists", href: "/lists" }],
  },
];
