// object defines failure statuses as constants.
const FAILURE_STATUSES = {
  PENDING_SCHEDULE_DELIVERY: "PENDING_SCHEDULE_DELIVERY",
  PENDING_PLAYLOG_RETRIEVAL: "PENDING_PLAYLOG_RETRIEVAL",
  UNOPTIMIZED: "UNOPTIMIZED",
  LOG_PENDING: "LOG_PENDING",
  PROBLEMATIC: "PROBLEMATIC",
  SCHEDULED_DELIVERY_FAILED: "SCHEDULED_DELIVERY_FAILED",
  SCHEDULED_INGEST_FAILED: "SCHEDULED_INGEST_FAILED",
  CONTENT_DELIVERY_FAILED: "CONTENT_DELIVERY_FAILED",
  CONTENT_INGEST_FAILED: "CONTENT_INGEST_FAILED",
  ACTIVE: "ACTIVE",
  COMPLETED: "COMPLETED",
  PLANNED: "PLANNED",
  PLAYED: "PLAYED",
  SCHEDULED: "SCHEDULED",
  NOT_PLAYED: "NOT_PLAYED",
  PENDING: "PENDING",
  RETRIEVED: "RETRIEVED",
  RETRIEVING: "RETRIEVING",
};

// array of failure statuses along with their display names.
const FAILURE_STATUS_LIST = [
  {
    displayName: "Pending Schedule Delivery",
    id: FAILURE_STATUSES.PENDING_SCHEDULE_DELIVERY,
  },
  {
    displayName: "Pending Playlog Retrieval",
    id: FAILURE_STATUSES.PENDING_PLAYLOG_RETRIEVAL,
  },
  {
    displayName: "Unoptimized",
    id: FAILURE_STATUSES.UNOPTIMIZED,
  },
  {
    displayName: "Log Pending",
    id: FAILURE_STATUSES.LOG_PENDING,
  },
  {
    displayName: "Problematic",
    id: FAILURE_STATUSES.PROBLEMATIC,
  },
  {
    displayName: "Scheduled Delivery Failed",
    id: FAILURE_STATUSES.SCHEDULED_DELIVERY_FAILED,
  },
  {
    displayName: "Scheduled Ingest Failed",
    id: FAILURE_STATUSES.SCHEDULED_INGEST_FAILED,
  },
  {
    displayName: "Content Delivery Failed",
    id: FAILURE_STATUSES.CONTENT_DELIVERY_FAILED,
  },
  {
    displayName: "Content Ingest Failed",
    id: FAILURE_STATUSES.CONTENT_INGEST_FAILED,
  },
  {
    displayName: "Active",
    id: FAILURE_STATUSES.ACTIVE,
  },
  {
    displayName: "Completed",
    id: FAILURE_STATUSES.COMPLETED,
  },
  {
    displayName: "Planned",
    id: FAILURE_STATUSES.PLANNED,
  },
  {
    displayName: "Played",
    id: FAILURE_STATUSES.PLAYED,
  },
  {
    displayName: "Scheduled",
    id: FAILURE_STATUSES.SCHEDULED,
  },
  {
    displayName: "Not Played",
    id: FAILURE_STATUSES.NOT_PLAYED,
  },
  {
    displayName: "Pending",
    id: FAILURE_STATUSES.PENDING,
  },
  {
    displayName: "Retrieved",
    id: FAILURE_STATUSES.RETRIEVED,
  },
  {
    displayName: "Retrieving",
    id: FAILURE_STATUSES.RETRIEVING,
  },
];

export { FAILURE_STATUSES, FAILURE_STATUS_LIST };
