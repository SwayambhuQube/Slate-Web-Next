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
import { SCOPES, SCOPE_ACTIONS } from "..";
export const sideBarItems = [
  {
    name: "Schedules",
    iconComponent: CalendarCheck,
    href: "/schedules",
    dropdownItems: [
      { name: "Schedule Orders", href: "/schedules", scope: SCOPES.SCHEDULES },
    ],
  },
  {
    name: "Compositions",
    iconComponent: Film,
    href: "/composition",
    dropdownItems: [
      {
        name: "Compositions",
        href: "/composition",
        scope: SCOPES.COMPOSITIONS,
      },
    ],
  },
  {
    name: "Campaigns",
    iconComponent: Megaphone,
    href: "/campaigns",
    dropdownItems: [
      { name: "Campaigns", href: "/campaigns", scope: SCOPES.CAMPAIGNS },
      {
        name: "Campaign Reports",
        href: "/campaign-reports",
        scope: SCOPES.CAMPAIGNS,
      },
      {
        name: "Show Failure",
        href: "/show-failure",
        scope: SCOPES.CAMPAIGNS,
      },
    ],
  },
  {
    name: "Approval",
    iconComponent: FileStack,
    href: "/approval",
    dropdownItems: [
      {
        name: "Media Rights Approvals",
        href: "/campaign-approval",
      },
      {
        name: "Campaign Approvals",
        href: "/campaign-approval",
        scope: SCOPES.CAMPAIGNS,
        scopeAction: SCOPE_ACTIONS.APPROVE,
      },
      {
        name: "Brand Verifications",
        href: "/brand-verification",
        scope: SCOPES.BRAND_VERIFICATIONS,
      },
    ],
  },
  {
    name: "Content",
    iconComponent: PlaySquare,
    href: "/content",
    dropdownItems: [
      {
        name: "Unmapped CPLs",
        href: "/unmapped-cpls",
        scope: SCOPES.CPL_MAPPINGS,
      },
      { name: "Content", href: "/content", scope: SCOPES.CONTENT },
      {
        name: "Archived Content",
        href: "/archived-content",
        scope: SCOPES.CONTENT,
      },
    ],
  },
  {
    name: "Inventory",
    iconComponent: Database,
    href: "/inventory",
    dropdownItems: [
      { name: "Theaters/Screen", href: "/theaters", scope: SCOPES.INVENTORY },
      {
        name: "Playlist Templates",
        href: "/playlist-templates",
        scope: SCOPES.PLAYLIST_TEMPLATES,
      },
    ],
  },
  {
    name: "Companies",
    iconComponent: Building2,
    href: "/companies",
    dropdownItems: [
      { name: "Sellers", href: "/sellers", scope: SCOPES.COMPANIES_MANAGE },
      { name: "Buyers", href: "/buyers", scope: SCOPES.BUYERS },
    ],
  },
  {
    name: "Catalogue",
    iconComponent: BookImage,
    href: "/catalogue",
    dropdownItems: [
      { name: "RateCards", href: "/rate-card" },
      { name: "Premiums", href: "/premiums" },
      { name: "Brands", href: "/brands", scope: SCOPES.BRANDS },
      { name: "Movies", href: "/movies", scope: SCOPES.MOVIES },
    ],
  },
  {
    name: "Other",
    iconComponent: Newspaper,
    href: "/other",
    dropdownItems: [{ name: "Lists", href: "/lists", scope: SCOPES.LISTS }],
  },
];
