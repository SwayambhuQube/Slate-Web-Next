const SCHEDULE_ERRORS = {
  "segment.overflow": "Segment is full for ",
  "position.unavailable": "Placement position is not available for",
  "screen.unavailable": "Cannot schedule for ",
  "advertiserTypeGovt.ineligible": "Compositions with Government Advertiser Type is ineligible for",
};

const SCHEDULE_STATUSES = {
  CREATED: "CREATED",
  DELIVERED: "DELIVERED",
  EXPIRED: "EXPIRED",
  FAILED: "FAILED",
};

const SCHEDULE_STATUS_LIST = [
  {
    displayName: "Created",
    id: SCHEDULE_STATUSES.CREATED,
  },
  {
    displayName: "Delivered",
    id: SCHEDULE_STATUSES.DELIVERED,
  },
  {
    displayName: "Expired",
    id: SCHEDULE_STATUSES.EXPIRED,
  },
  {
    displayName: "Failed",
    id: SCHEDULE_STATUSES.FAILED,
  },
];

const SCHEDULE_MISSING_DATA = {
  displayName: "Missing Data",
  id: true,
};

export { SCHEDULE_ERRORS, SCHEDULE_MISSING_DATA, SCHEDULE_STATUSES, SCHEDULE_STATUS_LIST };
