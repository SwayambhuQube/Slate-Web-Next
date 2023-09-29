import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, TablePagination } from "@mui/material";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { format } from "date-fns";

interface ILocalization {
  startDate: string;
  endDate: string;
  handleChangeStartDate(newValue: string): void;
  handleChangeEndDate(newValue: string): void;
  disabledPagination: boolean;
  count: number;
  page: number;
  rowsPerPage: number;
  rowsPerPageOptions: number[];
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => void;
  onRowsPerPageChange?: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  showPagination: boolean;
  filterComponent?: JSX.Element; // Make filterComponent optional
}

const TableNavigationWrapper: React.FC<ILocalization> = ({
  startDate,
  endDate,
  handleChangeStartDate,
  handleChangeEndDate,
  disabledPagination,
  count,
  page,
  rowsPerPage,
  rowsPerPageOptions,
  onPageChange,
  onRowsPerPageChange,
  showPagination,
  filterComponent,
}) => {
  const [updatedStartDate, setUpdatedStartDate] = useState(startDate);
  const [updatedEndDate, setUpdatedEndDate] = useState(endDate);

  const handleUpdateClick: () => void = () => {
    handleChangeStartDate(updatedStartDate);
    handleChangeEndDate(updatedEndDate);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottom: "2px solid rgb(217, 221, 226)",
        alignItems: "center",
      }}
    >
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        sx={{ height: "100px" }}
      >
        <div style={{ padding: "10px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <DesktopDatePicker
              className="dpLeft"
              disabled={disabledPagination}
              inputFormat="dd-MMM-yy"
              label="From Date"
              renderInput={(params) => <TextField {...params} />}
              value={updatedStartDate}
              onChange={(value) => {
                setUpdatedStartDate(format(value as any, "dd-MMM-yy"));
              }}
            />
            <DesktopDatePicker
              className="dpRight"
              disabled={disabledPagination}
              inputFormat="dd-MMM-yy"
              label="To Date"
              minDate={updatedStartDate.toString()}
              renderInput={(params) => <TextField {...params} />}
              value={updatedEndDate}
              onChange={(value) => {
                setUpdatedEndDate(format(value as any, "dd-MMM-yy"));
              }}
            />
            <IconButton
              sx={{
                margin: "10px",
                border: "1px solid lightgrey",
                borderRadius: "5px",
                padding: "4px 5px",
                "&:hover": {
                  backgroundColor: "lightgrey",
                },
              }}
              onClick={handleUpdateClick}
            >
              <SearchIcon />
            </IconButton>
            {filterComponent && filterComponent}{" "}
            {/* Only render filterComponent if it's provided */}
          </Box>
        </div>
      </LocalizationProvider>
      {showPagination && (
        <TablePagination
          className="dpRight"
          component="div"
          count={count}
          labelRowsPerPage="Show"
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={rowsPerPageOptions}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
        />
      )}
    </div>
  );
};

// Set a default value for the filterComponent prop
TableNavigationWrapper.defaultProps = {
  filterComponent: undefined,
};

export default TableNavigationWrapper;
