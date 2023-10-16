"use client";

import fakeData from "@/app/mockData.json";
import {
  ColumnProps,
  PaginationProps,
  Table,
} from "@/components/common/table/table";
import { useMemo } from "react";
import { Column } from "react-table";

export default function Home() {
  const onGetPaginationControls = (row: PaginationProps) => {
    console.log(row);
  };
  const onRowClickhandle = (e: any) => {
    console.log("Row Clicked", e);
  };
  const onCellClickhandle = (e: any) => {
    console.log("Cell Clicked", e);
  };
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
        isSearchable: true,
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "University",
        accessor: "university",
      },
    ],
    []
  );
  return (
    <Table
      data={fakeData}
      columns={columns as Column<ColumnProps>[]}
      sortable
      onRowClick={onRowClickhandle}
      onCellClick={onCellClickhandle}
      pageIndex={1}
      pageSize={30}
      getPaginationControls={onGetPaginationControls}
    />
  );
}
