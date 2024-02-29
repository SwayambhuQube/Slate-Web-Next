// import moment from "moment";
import { sortBy } from "lodash";
import {
  TAG_TYPE,
  TAG_RENDER_TYPE,
  TAG_RENDER_TYPE_MAP,
  TAG_TYPE_DISPLAY_NAME,
  FILTER_CONDITION_TYPE,
  DATE_RANGE_TAGS,
  OPERATION_TAGS,
  STATIC_FILTER_TAGS,
  SCREEN_STATUSES,
  SCREEN_STATUS_LIST,
  STATIC_FILTER_TAG_LIST,
  MOVIE_STATUSES,
  MOVIE_STATUS_LIST,
  RIGHT_STATUSES,
  RIGHT_STATUS_LIST,
  MAX_DATE,
  MIN_DATE,
  OPERATIONS,
} from "./filter";
import {
  THEATRE_SCREENS_VIEW_TYPE,
  CAMPAIGN_STATUSES,
  CAMPAIGN_STATUS_LABELS,
  CAMPAIGN_STATUS_LIST,
  CONTENT_AVAILABILITY_STATUS,
  CAMPAIGN_ACTIONS,
  CAMPAIGN_ACTIONS_ALLOWED_STATUS_LIST,
  CAMPAIGN_TYPE,
  CAMPAIGN_STEPS,
} from "./campaigns";
import {
  BRAND_TYPE,
  BRAND_TITLE,
  BRAND_KEY,
  BRANDS_TYPE,
  BRAND_TAG,
  BRAND_TAG_TYPE,
  BRAND_LABEL_NAME,
  DEFAULT_BRAND_KEY,
} from "./brands";

import {
  VERIFICATION_ACTIONS,
  VERIFICATION_STATUSES,
  BRANDS,
  VERIFICATION_DETAIL_FIELDS,
} from "./verifications";

import { THEATRE_CRITERIA_TYPES, THEATRE_CRITERIA_MENU_LIST } from "./criteria";
import { STATUS_ICON_TYPES, STATUS_ICON_COLORS, STATUS_COLORS } from "./status";
import { CONTENT_STANDARD } from "./contents";

import { SCOPES, SCOPE_ACTIONS } from "./scopes";
import {
  SCHEDULE_ERRORS,
  SCHEDULE_STATUSES,
  SCHEDULE_STATUS_LIST,
  SCHEDULE_MISSING_DATA,
} from "./schedules";

import { FAILURE_STATUSES, FAILURE_STATUS_LIST } from "./failuresScreens";

const DEFAULT_PAGE_SIZE = 100;
const PAGE_SIZE_OPTIONS = [10, 25, 50, 100, 250];
const DEFAULT_LOADING_ROW_COUNT = 10;
const DEFAULT_LANGUAGE = "en";
const DEFAULT_TOAST_TIMEOUT = 5000;

const CUSTOMER_SEGMENT = {
  SLATE_ADMIN: "SLATE_ADMIN",
  EXHIBITOR: "EXHIBITOR",
  MEDIA_AGENCY: "MEDIA_AGENCY",
  ADVERTISER: "ADVERTISER",
};

const COMPANY_STATUS = {
  PENDING: "Pending",
};

const LOCAL_STORAGE_KEY = {
  TOKEN: "token",
  NEXT_URL: "nextUrl",
};

const FORM_FIELD_TYPE = {
  INPUT: "input",
  SELECT: "select",
  BUTTON: "button",
  SUGGESTION: "suggestion",
  BP_SUGGEST: "blueprintSuggest",
  MULTI_SELECT: "multiSelect",
  TEXT_AREA: "textArea",
  LABEL: "label",
  DATE: "date",
  RADIO: "radio",
  DROP_DOWN: "dropDown",
  TAG_SEARCH: "tagSearch",
  API_SEARCH: "apiSearch",
  API_SELECT: "apiSelect",
  INPUT_WITH_SELECT: "inputWithSelect",
  CHECK_BOX: "checkBox",
  DATE_RANGE_PICKER: "dateRangePicker",
  TIME_RANGE_PICKER: "timeRangePicker",
  INPUT_HOURS: "inputHours",
  INPUT_RANGE: "inputRange",
  NUMERIC_INPUT: "numericInput",
  CUSTOM_DATE_RANGE_PICKER: "customDateRangePicker",
  DROP_DOWN_WITH_SEARCH: "dropDownWithSearch",
};

const CATEGORY_TYPE_MAP = {
  category: "Category",
  subCategory1: "Sub Category 1",
  subCategory2: "Sub Category 2",
};

const CATEGORY_KEYS = [
  "categoryId",
  "categoryName",
  "subCategory1Id",
  "subCategory1Name",
  "subCategory2Id",
  "subCategory2Name",
];

const ICONS = {
  CROSS: "cross",
};

const SPECIAL_CHARACTERS = {
  MIDDLE_DOT: "• ",
  COMMA: ", ",
  PIPE: "| ",
};

const APPROVAL_ACTIONS = ["Add", "Update"];

const DEFAULT_ACTION_ICON_COLUMN = {
  id: "icon",
  sortable: false,
  resizable: false,
  width: 64,
  hideIfOnlyColumn: true,
};

const BRAND_PROPERTIES = ["product", "modifier", "movie", "theatre"];

const CPL_STATUSES = {
  MAPPED: "Mapped",
  UNMAPPED: "Pending",
  MOVIE_MAPPED: "MovieMapped",
  IGNORED: "Ignored",
};

// Maintain Order as 0-Sunday, 6-Saturday
// const DAY_OF_WEEK = sortBy(
//   moment.weekdaysShort(true).map((day, index) => ({
//     label: day,
//     name: moment.weekdays(index),
//     value: index,
//   })),
//   "value"
// );

// const MONTH_OF_YEAR = moment.monthsShort().map((month, index) => ({
//   label: month,
//   name: moment.months(index),
//   value: index + 1,
// }));

const VIEW_PORT_SIZE_CLASS = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
};

const VIEW_PORT_SIZE = {
  MOBILE: 599,
  TABLET: 767,
  MINI_DESKTOP: 980,
};

const SCREEN_SETTINGS = {
  SCHEDULING_TIME: "schedulingTime",
  SCHEDULING_CUTOFF_TIME: "schedulingCutOffTimeInSeconds",
  OVERBOOKING_PERCENTAGE: "allowedOverbookingInPercentage",
  AVERAGE_OCCUPANCY: "averageOccupancyInPercentage",
  SCREEN_STATUS: "screenStatus",
};

const SCREEN_SETTINGS_LIST = [
  {
    name: "Status",
    id: SCREEN_SETTINGS.SCREEN_STATUS,
    isEditable: true,
  },
  {
    name: "Schedule Timings",
    id: SCREEN_SETTINGS.SCHEDULING_TIME,
    isEditable: true,
  },
  {
    name: "Scheduling Cut-off Time",
    id: SCREEN_SETTINGS.SCHEDULING_CUTOFF_TIME,
    isEditable: true,
  },
  {
    name: "Average Occupancy",
    id: SCREEN_SETTINGS.AVERAGE_OCCUPANCY,
    isEditable: false,
  },
  {
    name: "Overbooking Percentage",
    id: SCREEN_SETTINGS.OVERBOOKING_PERCENTAGE,
    isEditable: false,
  },
];

const BILLING_CYCLES = {
  //SLATE-1396 Nov21 Anushree:- api returns field with code ON_CAMPAIGN_COMPLETION
  //CAMPAIGN_COMPLETION: "CAMPAIGN_COMPLETION",
  ON_CAMPAIGN_COMPLETION: "ON_CAMPAIGN_COMPLETION",
  WEEKLY: "WEEKLY",
  FORTNIGHTLY: "FORTNIGHTLY",
  MONTHLY: "MONTHLY",
};

const REASON_TYPES = {
  campaignProposalRejection: "Campaign Proposal Rejection",
  brandVerifications: "Brand Verifications",
  companyClaim: "Company Claim",
};

export {
  THEATRE_SCREENS_VIEW_TYPE,
  LOCAL_STORAGE_KEY,
  DEFAULT_LANGUAGE,
  PAGE_SIZE_OPTIONS,
  DEFAULT_PAGE_SIZE,
  CUSTOMER_SEGMENT,
  COMPANY_STATUS,
  SCOPES,
  SCOPE_ACTIONS,
  DEFAULT_LOADING_ROW_COUNT,
  DEFAULT_TOAST_TIMEOUT,
  FORM_FIELD_TYPE,
  CATEGORY_TYPE_MAP,
  BRAND_TITLE,
  BRAND_KEY,
  BRANDS_TYPE,
  BRAND_TAG,
  BRAND_TAG_TYPE,
  BRAND_LABEL_NAME,
  BRAND_TYPE,
  CATEGORY_KEYS,
  ICONS,
  APPROVAL_ACTIONS,
  DEFAULT_ACTION_ICON_COLUMN,
  STATUS_ICON_COLORS,
  STATUS_ICON_TYPES,
  BRAND_PROPERTIES,
  CPL_STATUSES,
  SCREEN_STATUSES,
  SCREEN_STATUS_LIST,
  DATE_RANGE_TAGS,
  OPERATION_TAGS,
  TAG_TYPE,
  TAG_RENDER_TYPE,
  TAG_RENDER_TYPE_MAP,
  TAG_TYPE_DISPLAY_NAME,
  FILTER_CONDITION_TYPE,
  STATIC_FILTER_TAGS,
  STATIC_FILTER_TAG_LIST,
  SPECIAL_CHARACTERS,
  VERIFICATION_ACTIONS,
  DEFAULT_BRAND_KEY,
  VERIFICATION_STATUSES,
  BRANDS,
  VERIFICATION_DETAIL_FIELDS,
  STATUS_COLORS,
  // DAY_OF_WEEK,
  // MONTH_OF_YEAR,
  CAMPAIGN_STATUS_LABELS,
  CAMPAIGN_STATUSES,
  CAMPAIGN_STATUS_LIST,
  CONTENT_AVAILABILITY_STATUS,
  SCREEN_SETTINGS,
  SCREEN_SETTINGS_LIST,
  BILLING_CYCLES,
  REASON_TYPES,
  THEATRE_CRITERIA_TYPES,
  THEATRE_CRITERIA_MENU_LIST,
  CONTENT_STANDARD,
  VIEW_PORT_SIZE_CLASS,
  VIEW_PORT_SIZE,
  CAMPAIGN_ACTIONS,
  CAMPAIGN_ACTIONS_ALLOWED_STATUS_LIST,
  CAMPAIGN_TYPE,
  CAMPAIGN_STEPS,
  MOVIE_STATUSES,
  MOVIE_STATUS_LIST,
  RIGHT_STATUSES,
  RIGHT_STATUS_LIST,
  MAX_DATE,
  MIN_DATE,
  SCHEDULE_ERRORS,
  SCHEDULE_STATUSES,
  SCHEDULE_STATUS_LIST,
  SCHEDULE_MISSING_DATA,
  FAILURE_STATUSES,
  FAILURE_STATUS_LIST,
  OPERATIONS,
};
