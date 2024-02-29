const THEATRE_CRITERIA_TYPES = {
  THEATRE_BY_ID: "theatreById",
  SCREEN_BY_ID: "screenById",
  //THEATRE_TYPE: "theatreTypes",
  THEATRE_TYPE: "theatreType",
  //THEATRE_LOCATION_TYPES: "theatreLocationTypes",
  THEATRE_LOCATION_TYPES: "theatreLocationType",
  //DIGITAL_INTEGRATORS: "digitalIntegrators",
  DIGITAL_INTEGRATORS: "digitalIntegrator",
  //PROJECTION_TYPES: "projectionTypes",
  PROJECTION_TYPES: "projectionType",
  //COOLING_TYPES: "coolingTypes",
  COOLING_TYPES: "coolingType",
  //EXPERIENCES: "experiences",
  EXPERIENCES: "experience",
  SEATING_CAPACITY: "seatingCapacity",
  TICKET_PRICE: "ticketPrice",
  PLAYLIST_TEMPLATE: "playlistTemplate",
  PLAYLIST_PACK: "playlistPack",
  SEGMENT_TYPE: "segmentType",
  AUDITORIUM_LENGTH: "auditoriumLength",
  AUDITORIUM_WIDTH: "auditoriumWidth",
  AUDITORIUM_HEIGHT: "auditoriumHeight",
  AUDITORIUM_DIMENSIONS: "auditoriumDimensions",
};

const THEATRE_CRITERIA_MENU_LIST = [
  {
    id: THEATRE_CRITERIA_TYPES.THEATRE_BY_ID,
    label: "Theatre By ID",
  },
  {
    id: THEATRE_CRITERIA_TYPES.SCREEN_BY_ID,
    label: "Screen By ID",
  },
  {
    id: THEATRE_CRITERIA_TYPES.THEATRE_TYPE,
    label: "Theatre Types",
  },
  {
    id: THEATRE_CRITERIA_TYPES.THEATRE_LOCATION_TYPES,
    label: "Theatre Location Types",
  },
  {
    id: THEATRE_CRITERIA_TYPES.DIGITAL_INTEGRATORS,
    label: "Digital Integrator",
  },
  {
    id: THEATRE_CRITERIA_TYPES.PROJECTION_TYPES,
    label: "Projection Types",
  },
  {
    id: THEATRE_CRITERIA_TYPES.COOLING_TYPES,
    label: "Cooling Types",
  },
  {
    id: THEATRE_CRITERIA_TYPES.EXPERIENCES,
    label: "Experiences",
  },
  {
    id: THEATRE_CRITERIA_TYPES.PLAYLIST_TEMPLATE,
    label: "Playlist Template",
  },
  {
    id: THEATRE_CRITERIA_TYPES.SEGMENT_TYPE,
    label: "Segment Type",
  },
  {
    id: THEATRE_CRITERIA_TYPES.PLAYLIST_PACK,
    label: "Playlist Pack",
  },
  {
    id: THEATRE_CRITERIA_TYPES.SEATING_CAPACITY,
    label: "Seating Capacity",
    minPlaceholder: "Minimum Capacity",
    maxPlaceholder: "Maximum Capacity",
  },
  {
    id: THEATRE_CRITERIA_TYPES.TICKET_PRICE,
    label: "Ticket Price",
    minPlaceholder: "Minimum Price",
    maxPlaceholder: "Maximum Price",
  },
  {
    id: THEATRE_CRITERIA_TYPES.AUDITORIUM_DIMENSIONS,
    label: "Auditorium Dimensions",
    minPlaceholder: "Min",
    maxPlaceholder: "Max",
    accessors: [
      THEATRE_CRITERIA_TYPES.AUDITORIUM_LENGTH,
      THEATRE_CRITERIA_TYPES.AUDITORIUM_WIDTH,
      THEATRE_CRITERIA_TYPES.AUDITORIUM_HEIGHT,
    ],
  },
];

export { THEATRE_CRITERIA_TYPES, THEATRE_CRITERIA_MENU_LIST };
