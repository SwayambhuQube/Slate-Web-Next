/* eslint-disable camelcase */
//columnStructure creates structure for the columns in showFailures table
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
const tableShowFailuresColumnStructure = [
  {
    table_id: 1,
    col_name: "screenName",
    col_visible: true,
    col_label: "Screen Name",
    col_type: "string",
    // [ displayFncName, formatParam, [linkFncName, linkArg], displayArg]
    col_value: [["fncDisplay", [], ["filter", "cityId"], ["screenName"]]],
    col_subValue: [["fncDisplay", [], [], ["Screen Code: ", "ScreenCode"]]],
    col_width: 230,
    col_minWidth: null,
    col_sort: true,
  },

  {
    table_id: 1,
    col_name: "noOfSchedules",
    col_visible: true,
    col_label: "Schedule Count",
    col_type: "number",
    col_value: [["fncDisplay", [], [], ["noOfSchedules"]]],
    col_subValue: null,
    col_width: null,
    col_minWidth: null,
    col_sort: true,
  },

  {
    table_id: 1,
    col_name: "takenCount",
    col_visible: true,
    col_label: "Taken Count",
    col_type: "string",
    col_value: [
      ["fncDisplay", [], [], ["Taken: "]],
      ["fncDisplay", [], [], ["totalTaken"]],
    ],
    col_subValue: [
      ["fncDisplay", [], [], ["Not Taken: "]],
      ["fncDisplay", [], [], ["totalNotTaken"]],
    ],
    col_width: null,
    col_minWidth: null,
    col_sort: true,
  },

  {
    table_id: 1,
    col_name: "playedCount",
    col_visible: true,
    col_label: "Played Count",
    col_type: "string",
    col_value: [
      ["fncDisplay", [], [], ["Played: "]],
      ["fncDisplay", [], [], ["totalPlayed"]],
    ],
    col_subValue: [
      ["fncDisplay", [], [], ["Not Played: "]],
      ["fncDisplay", [], [], ["totalNotPlayed"]],
    ],
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
    col_width: 140,
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
      ["fncDisplay", [], [], ["moviesScheduled"]],
    ],
    col_subValue: [
      ["fncDisplay", [], [], ["Played: "]],
      ["fncDisplay", [], [], ["spotsPlayed"]],
    ],
    col_width: 140,
    col_minWidth: null,
    col_sort: true,
  },
  {
    table_id: 1,
    col_name: "takenPercent",
    col_visible: true,
    col_label: "Taken %",
    col_type: "percentage",
    col_value: [["fncDisplay", [], [], ["takenPercent", "%"]]],
    col_subValue: null,
    col_width: null,
    col_minWidth: null,
    col_sort: true,
  },
  {
    table_id: 1,
    col_name: "playedPercent",
    col_visible: true,
    col_label: "Played %",
    col_type: "percentage",
    col_value: [["fncDisplay", [], [], ["playedPercent", "%"]]],
    col_subValue: null,
    col_width: null,
    col_minWidth: null,
    col_sort: true,
  },
  {
    table_id: 1,
    col_name: "spotsPlayedPercent",
    col_visible: true,
    col_label: "Spots %",
    col_type: "percentage",
    col_value: [["fncDisplay", [], [], ["spotsPlayedPercent", "%"]]],
    col_subValue: null,
    col_width: null,
    col_minWidth: null,
    col_sort: true,
  },
  {
    table_id: 1,
    col_name: "totalTaken",
    col_visible: true,
    col_label: "Total Taken",
    col_type: "number",
    col_value: [["fncDisplay", [], [], ["totalTaken"]]],
    col_subValue: null,
    col_width: null,
    col_minWidth: null,
    col_sort: true,
  },
  {
    table_id: 1,
    col_name: "totalNotTaken",
    col_visible: true,
    col_label: "Total Not Taken",
    col_type: "number",
    col_value: [["fncDisplay", [], [], ["totalNotTaken"]]],
    col_subValue: null,
    col_width: null,
    col_minWidth: null,
    col_sort: true,
  },
  {
    table_id: 1,
    col_name: "totalPlayed",
    col_visible: true,
    col_label: "Total Played",
    col_type: "number",
    col_value: [["fncDisplay", [], [], ["totalPlayed"]]],
    col_subValue: null,
    col_width: null,
    col_minWidth: null,
    col_sort: true,
  },
  {
    table_id: 1,
    col_name: "totalNotPlayed",
    col_visible: true,
    col_label: "Total Not Played",
    col_type: "number",
    col_value: [["fncDisplay", [], [], ["totalNotPlayed"]]],
    col_subValue: null,
    col_width: null,
    col_minWidth: null,
    col_sort: true,
  },
  {
    table_id: 1,
    col_name: "spotsMaximum",
    col_visible: true,
    col_label: "Spots Max.",
    col_type: "number",
    col_value: [["fncDisplay", [], [], ["spotsMaximum"]]],
    col_subValue: null,
    col_width: null,
    col_minWidth: null,
    col_sort: true,
  },
  {
    table_id: 1,
    col_name: "spotsScheduled",
    col_visible: true,
    col_label: "Spots Scheduled",
    col_type: "number",
    col_value: [["fncDisplay", [], [], ["spotsScheduled"]]],
    col_subValue: null,
    col_width: null,
    col_minWidth: null,
    col_sort: true,
  },
  {
    table_id: 1,
    col_name: "movies Scheduled",
    col_visible: true,
    col_label: "Movies Scheduled",
    col_type: "number",
    col_value: [["fncDisplay", [], [], ["moviesScheduled"]]],
    col_subValue: null,
    col_width: null,
    col_minWidth: null,
    col_sort: true,
  },
  {
    table_id: 1,
    col_name: "spotsPlayed",
    col_visible: true,
    col_label: "Spots Played",
    col_type: "number",
    col_value: [["fncDisplay", [], [], ["spotsPlayed"]]],
    col_subValue: null,
    col_width: null,
    col_minWidth: null,
    col_sort: true,
  },
  //action icon column
  // {
  //   table_id: 1,
  //   col_name: "ActionIcon",
  //   col_visible: true,
  //   col_label: [],
  //   col_type: "string",
  //   col_value: [["icon", [], ["popup1"], ["EditIcon", "Tooltip.update"]]],
  //   col_subValue: null,
  //   col_width: null,
  //   col_minWidth: null,
  //   col_sort: true,
  // },
];

//subRowStructure creates structure for the cells in sub row component of showFailure table
//structure defination:
//     row_num: row number where the cell is to be displayed
//     row_name: name of the cell
//     row_type: type of data stored
//     row_flex: flex value of the cell
//     row_value: cell value [["display function name","formatting","link function name","arg"],..]
//     is_meta:
const tableShowFailuresSubRowStructure = [
  {
    row_num: 1,
    row_name: "Theatre",
    row_type: "text",
    row_flex: "2",
    row_value: [
      ["fncDisplay", [], [], [" Theatre: ", "theatreName", ", "]],

      ["fncDisplay", [], ["filter", "cityId"], ["cityName"]],
      ["fncDisplay", [], [], [", "]],
      ["fncDisplay", [], ["filter", "provinceId"], ["provinceName"]],
    ],
    is_meta: "t",
  },
  {
    row_num: 1,
    row_name: "LastCalledOn",
    row_type: "date",
    row_flex: "1",
    row_value: [
      ["fncDisplay", [], [], ["Last Called: "]],
      ["fncDisplay", ["MMM DD, YYYY HH:mm"], [], ["lastCalledOn"]],
    ],
    is_meta: "t",
  },
  {
    row_num: 1,
    row_name: "LastPlayedOn",
    row_type: "date",
    row_flex: "1",
    row_value: [["fncDisplay", [], [], ["Last Played: ", "lastPlayedOn"]]],
    is_meta: "t",
  },
  {
    row_num: 2,
    row_name: "Integrator",
    row_type: "text",
    row_flex: "2",
    row_value: [["fncDisplay", [], [], ["Integrator: ", "integrator"]]],
    is_meta: "t",
  },
  {
    row_num: 2,
    row_name: "Remarks",
    row_type: "string",
    row_flex: "2",
    row_value: [["fncDisplay", [], [], ["Remarks: ", "Remarks"]]],
    is_meta: "t",
  },
];

export { tableShowFailuresColumnStructure, tableShowFailuresSubRowStructure };
