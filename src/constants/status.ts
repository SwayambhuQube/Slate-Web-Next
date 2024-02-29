const STATUS_ICON_TYPES = {
  CIRCLE: "CIRCLE",
  MOVIES: "MOVIES",
  DURATION: "DURATION",
  LOGS: "LOGS",
};

const STATUS_ICON_COLORS = {
  GREEN: "GREEN",
  GREY: "GREY",
  LIGHT_BLUE: "LIGHT_BLUE",
  YELLOW: "YELLOW",
  RED: "RED",
  PURPLE: "PURPLE",
  LIGHT_GREY: "LIGHT_GREY",
  AMBER: "AMBER",
  BLUE: "BLUE",
};

const STATUS_COLORS = [
  {
    name: "valid",
    label: "Active",
    color: STATUS_ICON_COLORS.GREEN,
  },
  {
    name: "future",
    label: "Future",
    color: STATUS_ICON_COLORS.LIGHT_BLUE,
  },
  {
    name: "expired",
    label: "Expired",
    color: STATUS_ICON_COLORS.GREY,
  },
];

export { STATUS_ICON_TYPES, STATUS_ICON_COLORS, STATUS_COLORS };
