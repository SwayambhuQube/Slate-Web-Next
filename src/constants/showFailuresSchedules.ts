/* eslint-disable camelcase */
//columnStructure creates structure for the columns in showFailuresSchedules table
//structure defination:
//     table_id: version
//     col_name: distinct column name
//     col_visible: visibility of column by default /*not handled*/
//     col_label: label of column
//     col_type: type of data stored
//     col_value: first item in a cell [["display function name","formatting","link function name","arg"],..]
//     col_subValue: second item in a cell
//     col_width: width of column
//     col_minWidth: minimum width of column /*not handled*/
//     col_sort: sortable or not
const tableFailuresScheduleColumnStructure = [
  {
    table_id: 1,
    col_name: "scheduleName",
    col_visible: true,
    col_label: "Schedule Name",
    col_type: "string",
    col_value: [["fncDisplay", [], [], ["name"]]],
    col_subValue: null,
    col_width: 230,
    col_minWidth: null,
    col_sort: true,
  },

  {
    table_id: 1,
    col_name: "takenStatus",
    col_visible: true,
    col_label: "Taken Status",
    col_type: "date",
    col_value: [["fncDisplay", [], [], ["scheduleStatus"]]],
    col_subValue: [["fncDisplay", ["DD-MMM-YY hh:mm"], [], ["takenOn"]]],
    col_width: null,
    col_minWidth: null,
    col_sort: true,
  },

  {
    table_id: 1,
    col_name: "playedStatus",
    col_visible: true,
    col_label: "Played Status",
    col_type: "string",
    col_value: [["fncDisplay", [], [], ["playLogStatus"]]],
    col_subValue: null,
    col_width: null,
    col_minWidth: null,
    col_sort: true,
  },

  {
    table_id: 1,
    col_name: "spotsSchedule",
    col_visible: true,
    col_label: "Spots Max/Sch.",
    col_type: "string",
    col_value: [
      ["fncDisplay", [], [], ["Max: "]],
      ["fncDisplay", [], [], ["spotsMaximum"]],
    ],
    col_subValue: [
      ["fncDisplay", [], [], ["Sch.: "]],
      ["fncDisplay", [], [], ["spotsScheduled"]],
    ],
    col_width: null,
    col_minWidth: null,
    col_sort: true,
  },
  {
    table_id: 1,
    col_name: "spotsMovie",
    col_visible: true,
    col_label: "Spots Mov./Play",
    col_type: "string",
    col_value: [
      ["fncDisplay", [], [], ["Movies: "]],
      ["fncDisplay", [], [], ["spotsPossible"]],
    ],
    col_subValue: [
      ["fncDisplay", [], [], ["Played: "]],
      ["fncDisplay", [], [], ["spotsPlayed"]],
    ],
    col_width: null,
    col_minWidth: null,
    col_sort: true,
  },
  {
    table_id: 1,
    col_name: "lossPercent",
    col_visible: true,
    col_label: "Loss Percent",
    col_type: "percentage",
    col_value: [["fncDisplay", [], [], ["lossPercent", "%"]]],
    col_subValue: null,
    col_width: null,
    col_minWidth: null,
    col_sort: true,
  },
  {
    table_id: 1,
    col_name: "reason",
    col_visible: true,
    col_label: "Reason",
    col_type: "string",
    col_value: [["fncDisplay", [], [], ["reason"]]],
    col_subValue: null,
    col_width: null,
    col_minWidth: null,
    col_sort: true,
  },
];

//subRowStructure creates structure for the cells in sub row component of showFailureSchedules table
//structure defination:
//     row_num: row number where the cell is to be displayed
//     row_name: name of the cell
//     row_type: type of data stored
//     row_flex: flex value of the cell
//     row_value: cell value [["display function name","formatting","link function name","arg"],..]
//     is_meta:
const tableFailuresScheduleSubRowStructure = [
  {
    row_num: 1,
    row_name: "orderId",
    row_type: "text",
    row_flex: "2",
    row_value: [["fncDisplay", [], [], ["Order Id: ", "scheduleOrderId"]]],
    is_meta: [],
  },
  {
    row_num: 1,
    row_name: "GovtRoNo",
    row_type: "text",
    row_flex: "2",
    row_value: [["fncDisplay", [], [], ["Govt. RO No.: ", "govtRoNo"]]],
    is_meta: [],
  },
  {
    row_num: 1,
    row_name: "composition",
    row_type: "date",
    row_flex: "2",
    row_value: [["fncDisplay", [], [], ["cplName"]]],
    is_meta: [],
  },
  {
    row_num: 2,
    row_name: "ScheduleCreatedOn",
    row_type: "date",
    row_flex: "2",
    row_value: [
      ["fncDisplay", [], [], ["Created On: "]],
      ["fncDisplay", ["DD-MMM-YY hh:mm:ss A"], [], ["createdOn"]],
    ],
    is_meta: [],
  },
  {
    row_num: 2,
    row_name: "schedulePeriod",
    row_type: "date",
    row_flex: "2",
    row_value: [
      ["fncDisplay", [], [], ["Period: "]],
      ["fncDisplay", ["DD-MMM-YY"], [], ["startDate"]],
      ["fncDisplay", [], [], [" to "]],
      ["fncDisplay", ["DD-MMM-YY"], [], ["endDate"]],
    ],
    is_meta: [],
  },
  {
    row_num: 2,
    row_name: "theatre",
    row_type: "text",
    row_flex: "2",
    row_value: [
      ["fncDisplay", [], [], ["Theatre: ", "theatreName", ", "]],
      ["fncDisplay", [], [], ["cityName"]],
      ["fncDisplay", [], [], [", "]],
      ["fncDisplay", [], [], ["provinceName"]],
    ],
    is_meta: [],
  },
  {
    row_num: 3,
    row_name: "Shows",
    row_type: "string",
    row_flex: "2",
    row_value: [
      ["fncDisplay", [], [], ["Shows: "]],
      ["fncDisplay", [], [], ["shows"]],
    ],
    is_meta: [],
  },
  {
    row_num: 3,
    row_name: "days",
    row_type: "string",
    row_flex: "2",
    row_value: [
      ["fncDisplay", [], [], ["Days: "]],
      ["fncDisplay", [], [], ["days"]],
    ],
    is_meta: [],
  },
  {
    row_num: 3,
    row_name: "Position",
    row_type: "string",
    row_flex: "1",
    row_value: [
      [
        "fncDisplay",
        [],
        [],
        ["Position: ", "positions", " | ", "prefPositions"],
      ],
    ],
    is_meta: [],
  },
  {
    row_num: 3,
    row_name: "Repetition",
    row_type: "string",
    row_flex: "1",
    row_value: [["fncDisplay", [], [], ["Repetition: ", "spotRepetition"]]],
    is_meta: [],
  },
];

export {
  tableFailuresScheduleColumnStructure,
  tableFailuresScheduleSubRowStructure,
};
