import { keys } from "lodash";

import { CAMPAIGN_STATUS_LIST, CONTENT_AVAILABILITY_STATUS } from "./campaigns";
import { SCHEDULE_STATUS_LIST } from "./schedules";
import { FAILURE_STATUS_LIST } from "./failuresScreens";
import { STATUS_ICON_COLORS } from "./status";

// Create a tag type with a Prefix and it can be a Page or Tab name where the filters are used.
// This make sure that tag type and tag lists are unique
// Suffix (ie. after _) will be used as the key in `createQueryParam` function.

//constant for maximum and minimum date, for dateRangeFilter
const MAX_DATE = "2053-01-01";
const MIN_DATE = "1986-01-01";

const __QUERY_PARAM_TAG_TYPE__ = {
  SCHEDULE_MISSING_PO_NUMBER: "missingPONumber",
  SCHEDULE_STATUS: "status",
  FAILURE_STATUS: "failureStatus",
  SCREEN_STATUS: "activationStatus",
  MOVIE_STATUS: "movieStatus",
  RIGHT_STATUS: "rightStatus",
  PLAYLIST_STATUS: "playlistStatus",
  SPOT_STATUS: "spotStatus",
  PLAYLOG_STATUS: "playlogStatus",
  CONTENT_STATUS: "contentStatus",
};

const TAG_TYPE = {
  SCREEN: "screen",
  THEATRE: "theatre",
  CHAIN: "chain",
  CITY: "city",
  PROVINCE: "province",
  COUNTRY: "country",
  LOCATION: ["city", "province", "country"],
  MOVIE: "movie",
  HEARTBEAT: "heartbeat",
  CHILD_SAFE_CERTIFICATION: "certificationChildSafety",
  CATEGORY: "productCategory",
  SUB_CATEGORY_1: "productSubCategory1",
  SUB_CATEGORY_2: "productSubCategory2",
  ALL_CATEGORIES: ["productCategory", "productSubCategory1", "productSubCategory2"],
  DATE: "date",
  EVENT: "event",
  SOURCE: "source",
  LANGUAGE: "language",
  USER: "user",
  COMPANY: "company",
  PARENT_BRAND: "parentBrand",
  INDIVIDUAL_BRAND: "individualBrand",
  PRODUCT: "product",
  VARIANT: "variant",
  BRAND: ["parentBrand", "individualBrand", "product", "variant"],
  PUBLIC_HOLIDAY: "publicHoliday",
  NOTIFICATION_CODE: "notificationCode",
  PLAYLIST_TEMPLATES: "playlistTemplate",
  TIMES_OF_DAY: "timesOfDay",
  DIGITAL_INTEGRATOR: "digitalIntegrator",
  SOUND_MIX: "soundMix",
  THREE_D_MODEL: "threeDModel",
  SEATING_CLASS: "seatingClass",
  SESSION: "session",
  RELEASE_DATE: "releaseDate",
  WEEK_NUMBER: "weekNumber",
  REASON_TYPE: "reasonType",
  CONTENT_TYPE: "contentType",
  SEGMENT_TYPE: "segmentType",
  PRODUCT_ID_TYPE: "productIdType",
  THEATRE_TYPE: "theatreType",
  PROJECTION_TYPE: "projectionType",
  COOLING_TYPE: "coolingType",
  THEATRE_LOCATION_TYPE: "theatreLocationType",
  BRAND_VERIFICATION: "brandVerification",
  CPL: "cpl",
  UPDATED_AT: "updatedAt",
  CREATED_AT: "createdAt",
  DATE_RANGE: "dateRange",
  SUBMITTED_AT: "submittedAt",
  CAMPAIGN: "campaign",
  CAMPAIGN_STATUS: "campaignStatus",
  // CAMPAIGN_STATUS: "status",
  CONTENT_AVAILABILITY: "isContentAvailable",
  TARGET_GROUP: "targetGroup",
  CONTENT: "content",
  IN_USE: "inUse",
  ASPECT_RATIO: "aspectRatio",
  RESOLUTION_NAME: "resolution",
  PICTURE_TYPE: "pictureType",
  AUDIO_TYPE: "audioType",
  SMPTE: "smpte",
  PACKAGE_NAME: "packageName",
  ADVERTISER: "advertiser",
  BUSINESS_TYPE: "businessType",
  ADVERTISER_STATUS: "advertiserStatus",
  ADVERTISER_TYPE: "advertiserType",
  SCREEN_ERP_ID: "erpScreenId",
  THEATRE_ERP_ID: "erpTheatreId",
  SCREEN_DAVP_ID: "davpScreenId",
  THEATRE_DAVP_ID: "davpTheatreId",
  SCHEDULE: "scheduleOrder",
  NO_OF_SCHEDULES: "noOfSchedules",
  TOTAL_TAKEN: "totalTaken",
  TOTAL_PLAYED: "totalPlayed",
  NO_OF_SHOW_DAYS: "noOfShowDays",
  SPOTS_SCHEDULED: "spotsScheduled",
  SPOTS_PLAYED: "spotsPlayed",
  SPOTS_POSSIBLE: "spotsPossible",
  ...__QUERY_PARAM_TAG_TYPE__,
};

const TAG_RENDER_TYPE = {
  SEARCH: "search",
  LIST: "list",
  DATE_RANGE: "dateRange",
  OPERATION: "operation",
};

// For now, we are defaulting to Search as the tag render type if it is not defined.
// We can add the type here if we want to render something else for a tag
const TAG_RENDER_TYPE_MAP = {
  [TAG_TYPE.HEARTBEAT]: TAG_RENDER_TYPE.LIST,
  [TAG_TYPE.CHILD_SAFE_CERTIFICATION]: TAG_RENDER_TYPE.LIST,
  [TAG_TYPE.REASON_TYPE]: TAG_RENDER_TYPE.LIST,
  [TAG_TYPE.CONTENT_TYPE]: TAG_RENDER_TYPE.LIST,
  [TAG_TYPE.SEGMENT_TYPE]: TAG_RENDER_TYPE.LIST,
  [TAG_TYPE.BUSINESS_TYPE]: TAG_RENDER_TYPE.LIST,
  [TAG_TYPE.PRODUCT_ID_TYPE]: TAG_RENDER_TYPE.LIST,
  [TAG_TYPE.THEATRE_TYPE]: TAG_RENDER_TYPE.LIST,
  [TAG_TYPE.PROJECTION_TYPE]: TAG_RENDER_TYPE.LIST,
  [TAG_TYPE.COOLING_TYPE]: TAG_RENDER_TYPE.LIST,
  [TAG_TYPE.THEATRE_LOCATION_TYPE]: TAG_RENDER_TYPE.LIST,
  [TAG_TYPE.SOUND_MIX]: TAG_RENDER_TYPE.LIST,
  [TAG_TYPE.THREE_D_MODEL]: TAG_RENDER_TYPE.LIST,
  [TAG_TYPE.DIGITAL_INTEGRATOR]: TAG_RENDER_TYPE.LIST,
  [TAG_TYPE.SEATING_CLASS]: TAG_RENDER_TYPE.LIST,
  [TAG_TYPE.UPDATED_AT]: TAG_RENDER_TYPE.DATE_RANGE,
  [TAG_TYPE.CREATED_AT]: TAG_RENDER_TYPE.DATE_RANGE,
  [TAG_TYPE.DATE_RANGE]: TAG_RENDER_TYPE.DATE_RANGE,
  [TAG_TYPE.SUBMITTED_AT]: TAG_RENDER_TYPE.DATE_RANGE,
  [TAG_TYPE.SCREEN_STATUS]: TAG_RENDER_TYPE.LIST,
  [TAG_TYPE.CAMPAIGN_STATUS]: TAG_RENDER_TYPE.LIST,
  [TAG_TYPE.ADVERTISER_STATUS]: TAG_RENDER_TYPE.LIST,
  [TAG_TYPE.EVENT]: TAG_RENDER_TYPE.LIST,
  [TAG_TYPE.ADVERTISER_TYPE]: TAG_RENDER_TYPE.LIST,
  [TAG_TYPE.SPOT_STATUS]: TAG_RENDER_TYPE.LIST,
  [TAG_TYPE.PLAYLOG_STATUS]: TAG_RENDER_TYPE.LIST,
  [TAG_TYPE.CONTENT_STATUS]: TAG_RENDER_TYPE.LIST,
  [TAG_TYPE.SCHEDULE_STATUS]: TAG_RENDER_TYPE.LIST,
  [TAG_TYPE.NO_OF_SCHEDULES]: TAG_RENDER_TYPE.OPERATION,
  [TAG_TYPE.TOTAL_TAKEN]: TAG_RENDER_TYPE.OPERATION,
  [TAG_TYPE.TOTAL_PLAYED]: TAG_RENDER_TYPE.OPERATION,
  [TAG_TYPE.NO_OF_SHOW_DAYS]: TAG_RENDER_TYPE.OPERATION,
  [TAG_TYPE.SPOTS_SCHEDULED]: TAG_RENDER_TYPE.OPERATION,
  [TAG_TYPE.SPOTS_PLAYED]: TAG_RENDER_TYPE.OPERATION,
  [TAG_TYPE.SPOTS_POSSIBLE]: TAG_RENDER_TYPE.OPERATION,
};

const DATE_RANGE_TAGS = [
  TAG_TYPE.UPDATED_AT,
  TAG_TYPE.CREATED_AT,
  TAG_TYPE.SUBMITTED_AT,
  TAG_TYPE.DATE_RANGE,
];

const OPERATION_TAGS = [
  TAG_TYPE.NO_OF_SCHEDULES,
  TAG_TYPE.TOTAL_TAKEN,
  TAG_TYPE.TOTAL_PLAYED,
  TAG_TYPE.NO_OF_SHOW_DAYS,
  TAG_TYPE.SPOTS_SCHEDULED,
  TAG_TYPE.SPOTS_PLAYED,
  TAG_TYPE.SPOTS_POSSIBLE,
];

const SCREEN_STATUSES = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
  ACTIVE_IN_FUTURE: "ActiveInFuture",
  INACTIVE_IN_FUTURE: "InactiveInFuture",
};

const SCREEN_STATUS_LIST = [
  {
    displayName: "Active",
    id: SCREEN_STATUSES.ACTIVE,
  },
  {
    displayName: "Inactive",
    id: SCREEN_STATUSES.INACTIVE,
  },
  {
    displayName: "Active in Future",
    id: SCREEN_STATUSES.ACTIVE_IN_FUTURE,
  },
  {
    displayName: "Inactive in Future",
    id: SCREEN_STATUSES.INACTIVE_IN_FUTURE,
  },
];

const SPOT_STATUSES = {
  SCHEDULED: "Scheduled",
  PLAYED: "Played",
  NOT_PLAYED: "NotPlayed",
};

const SPOT_STATUS_LIST = [
  {
    displayName: "Scheduled",
    id: SPOT_STATUSES.SCHEDULED,
  },
  {
    displayName: "Played",
    id: SPOT_STATUSES.PLAYED,
  },
  {
    displayName: "Not Played",
    id: SPOT_STATUSES.NOT_PLAYED,
  },
];

const PLAYLOG_STATUSES = {
  PENDING: "Pending",
  RETREVING: "Retrieving",
  RETREIVED: "Retrieved",
};

const PLAYLOG_STATUS_LIST = [
  {
    displayName: "Pending",
    id: PLAYLOG_STATUSES.PENDING,
  },
  {
    displayName: "Retrieving",
    id: PLAYLOG_STATUSES.RETREVING,
  },
  {
    displayName: "Retrieved",
    id: PLAYLOG_STATUSES.RETREIVED,
  },
];

const CONTENT_STATUSES = {
  INJESTED: "Ingested",
  DELIVERY_FAILED: "DeliveryFailed",
  INGEST_FAILED: "IngestFailed",
};

const CONTENT_STATUS_LIST = [
  {
    displayName: "Ingested",
    id: CONTENT_STATUSES.INJESTED,
  },
  {
    displayName: "Delivery Failed",
    id: CONTENT_STATUSES.DELIVERY_FAILED,
  },
  {
    displayName: "Ingest Failed",
    id: CONTENT_STATUSES.INGEST_FAILED,
  },
];

const MOVIE_STATUSES = {
  RUNNING: "Running",
  SCHEDULED: "Scheduled",
  ARCHIVED: "Archived",
};

const MOVIE_STATUS_LIST = [
  {
    displayName: "Running",
    id: MOVIE_STATUSES.RUNNING,
    color: STATUS_ICON_COLORS.GREEN,
  },
  {
    displayName: "Scheduled",
    id: MOVIE_STATUSES.SCHEDULED,
    color: STATUS_ICON_COLORS.YELLOW,
  },
  {
    displayName: "Archived",
    id: MOVIE_STATUSES.ARCHIVED,
    color: STATUS_ICON_COLORS.RED,
  },
];

const RIGHT_STATUSES = {
  ACTIVE: "Active",
  FUTURE: "Future",
  EXPIRED: "Expired",
};

const RIGHT_STATUS_LIST = [
  {
    displayName: "Active",
    id: RIGHT_STATUSES.ACTIVE,
    color: STATUS_ICON_COLORS.GREEN,
  },
  {
    displayName: "Future",
    id: RIGHT_STATUSES.FUTURE,
    color: STATUS_ICON_COLORS.LIGHT_BLUE,
  },
  {
    displayName: "Expired",
    id: RIGHT_STATUSES.EXPIRED,
    color: STATUS_ICON_COLORS.GREY,
  },
];

// Can keep adding static tag list data and map with tag type
const STATIC_FILTER_TAG_LIST = {
  [TAG_TYPE.SCHEDULE_STATUS]: SCHEDULE_STATUS_LIST,
  [TAG_TYPE.FAILURE_STATUS]: FAILURE_STATUS_LIST,
  [TAG_TYPE.SCHEDULE_MISSING_PO_NUMBER]: [
    {
      displayName: "Missing Data",
      id: TAG_TYPE.SCHEDULE_MISSING_PO_NUMBER,
    },
  ],
  [TAG_TYPE.SCREEN_STATUS]: SCREEN_STATUS_LIST,
  [TAG_TYPE.CAMPAIGN_STATUS]: CAMPAIGN_STATUS_LIST,
  [TAG_TYPE.CONTENT_AVAILABILITY]: CONTENT_AVAILABILITY_STATUS,
  [TAG_TYPE.MOVIE_STATUS]: MOVIE_STATUS_LIST,
  [TAG_TYPE.RIGHT_STATUS]: RIGHT_STATUS_LIST,
  [TAG_TYPE.SPOT_STATUS]: SPOT_STATUS_LIST,
  [TAG_TYPE.PLAYLOG_STATUS]: PLAYLOG_STATUS_LIST,
  [TAG_TYPE.CONTENT_STATUS]: CONTENT_STATUS_LIST,
};

const STATIC_FILTER_TAGS = keys(STATIC_FILTER_TAG_LIST);

const TAG_TYPE_DISPLAY_NAME = {
  [TAG_TYPE.SCREEN]: "Screen",
  [TAG_TYPE.THEATRE]: "Theatre",
  [TAG_TYPE.CHAIN]: "Chain",
  [TAG_TYPE.CITY]: "City",
  [TAG_TYPE.PROVINCE]: "Province",
  [TAG_TYPE.COUNTRY]: "Country",
  [TAG_TYPE.MOVIE]: "Movie",
  [TAG_TYPE.HEARTBEAT]: "Heartbeat",
  [TAG_TYPE.CHILD_SAFE_CERTIFICATION]: "Child Safe",
  [TAG_TYPE.REASON_TYPE]: "Reason Type",
  [TAG_TYPE.CATEGORY]: "Product Category",
  [TAG_TYPE.SUB_CATEGORY_1]: "Product Sub-Category 1",
  [TAG_TYPE.SUB_CATEGORY_2]: "Product Sub-Category 2",
  [TAG_TYPE.UPDATED_AT]: "Updated On",
  [TAG_TYPE.CREATED_AT]: "Created On",
  [TAG_TYPE.DATE_RANGE]: "Date Range",
  [TAG_TYPE.SUBMITTED_AT]: "Submitted On",
  [TAG_TYPE.SCREEN_STATUS]: "Status",
  [TAG_TYPE.CAMPAIGN_STATUS]: "Status",
  [TAG_TYPE.BRAND]: "Brand",
  [TAG_TYPE.ALL_CATEGORIES]: "Category",
  [TAG_TYPE.LOCATION]: "Location",
  [TAG_TYPE.EVENT]: "Action",
  [TAG_TYPE.CPL]: "Composition",
  [TAG_TYPE.SCREEN_ERP_ID]: "Screen ERP ID",
  [TAG_TYPE.THEATRE_ERP_ID]: "Theatre ERP ID",
  [TAG_TYPE.SCREEN_DAVP_ID]: "Screen DAVP TH Code",
  [TAG_TYPE.THEATRE_DAVP_ID]: "Theatre DAVP TH Code",
  [TAG_TYPE.SCHEDULE_STATUS]: "Schedule Status",
  [TAG_TYPE.SPOT_STATUS]: "Spot Status",
  [TAG_TYPE.PLAYLOG_STATUS]: "Playlog Status",
  [TAG_TYPE.CONTENT_STATUS]: "Content Status",
  [TAG_TYPE.NO_OF_SCHEDULES]: "No. of Schedules",
  [TAG_TYPE.TOTAL_TAKEN]: "Total Taken",
  [TAG_TYPE.TOTAL_PLAYED]: "Total Played",
  [TAG_TYPE.NO_OF_SHOW_DAYS]: "No. of Show Days",
  [TAG_TYPE.SPOTS_SCHEDULED]: "Spots Scheduled",
  [TAG_TYPE.SPOTS_PLAYED]: "Spots Played",
  [TAG_TYPE.SPOTS_POSSIBLE]: "Spots Possible",
};

const FILTER_CONDITION_TYPE = {
  OR: "or",
  AND: "and",
};

const OPERATIONS = [
  { value: "lt", label: "Less Than" },
  { value: "gt", label: "Greater Than" },
  { value: "lte", label: "Less Than or Equal To" },
  { value: "gte", label: "Greater Than or Equal To" },
  { value: "eq", label: "Equal To" },
  { value: "ne", label: "Not Equal To" },
];

export {
  TAG_TYPE,
  TAG_RENDER_TYPE,
  TAG_RENDER_TYPE_MAP,
  TAG_TYPE_DISPLAY_NAME,
  FILTER_CONDITION_TYPE,
  DATE_RANGE_TAGS,
  OPERATION_TAGS,
  STATIC_FILTER_TAGS,
  STATIC_FILTER_TAG_LIST,
  SCREEN_STATUSES,
  SCREEN_STATUS_LIST,
  MOVIE_STATUSES,
  MOVIE_STATUS_LIST,
  RIGHT_STATUSES,
  RIGHT_STATUS_LIST,
  MAX_DATE,
  MIN_DATE,
  SPOT_STATUSES,
  SPOT_STATUS_LIST,
  PLAYLOG_STATUSES,
  PLAYLOG_STATUS_LIST,
  OPERATIONS,
};
