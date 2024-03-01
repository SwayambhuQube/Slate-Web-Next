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
      {
        name: "Schedule Orders",
        href: "/schedules",
        scope: SCOPES.SCHEDULES,
        scopeAction: undefined,
      },
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
        scopeAction: undefined,
      },
    ],
  },
  {
    name: "Campaigns",
    iconComponent: Megaphone,
    href: "/campaigns",
    dropdownItems: [
      {
        name: "Campaigns",
        href: "/campaigns",
        scope: SCOPES.CAMPAIGNS,
        scopeAction: undefined,
      },
      {
        name: "Campaign Reports",
        href: "/campaign-reports",
        scope: SCOPES.CAMPAIGNS,
        scopeAction: undefined,
      },
      {
        name: "Show Failure",
        href: "/show-failure",
        scope: SCOPES.CAMPAIGNS,
        scopeAction: undefined,
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
        scope: undefined,
        scopeAction: undefined,
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
        scopeAction: undefined,
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
        scopeAction: undefined,
      },
      {
        name: "Content",
        href: "/content",
        scope: SCOPES.CONTENT,
        scopeAction: undefined,
      },
      {
        name: "Archived Content",
        href: "/archived-content",
        scope: SCOPES.CONTENT,
        scopeAction: undefined,
      },
    ],
  },
  {
    name: "Inventory",
    iconComponent: Database,
    href: "/inventory",
    dropdownItems: [
      {
        name: "Theaters/Screen",
        href: "/theaters",
        scope: SCOPES.INVENTORY,
        scopeAction: undefined,
      },
      {
        name: "Playlist Templates",
        href: "/playlist-templates",
        scope: SCOPES.PLAYLIST_TEMPLATES,
        scopeAction: undefined,
      },
    ],
  },
  {
    name: "Companies",
    iconComponent: Building2,
    href: "/companies",
    dropdownItems: [
      {
        name: "Sellers",
        href: "/sellers",
        scope: SCOPES.COMPANIES_MANAGE,
        scopeAction: undefined,
      },
      {
        name: "Buyers",
        href: "/buyers",
        scope: SCOPES.BUYERS,
        scopeAction: undefined,
      },
    ],
  },
  {
    name: "Catalogue",
    iconComponent: BookImage,
    href: "/catalogue",
    dropdownItems: [
      {
        name: "RateCards",
        href: "/rate-card",
        scope: undefined,
        scopeAction: undefined,
      },
      {
        name: "Premiums",
        href: "/premiums",
        scope: undefined,
        scopeAction: undefined,
      },
      {
        name: "Brands",
        href: "/brands",
        scope: SCOPES.BRANDS,
        scopeAction: undefined,
      },
      {
        name: "Movies",
        href: "/movies",
        scope: SCOPES.MOVIES,
        scopeAction: undefined,
      },
    ],
  },
  {
    name: "Other",
    iconComponent: Newspaper,
    href: "/other",
    dropdownItems: [
      {
        name: "Lists",
        href: "/lists",
        scope: SCOPES.LISTS,
        scopeAction: undefined,
      },
    ],
  },
];
