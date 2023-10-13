"use client";

import { PaginationProps, Table } from "@/components/common/table/table";
import fakeData from "@/app/mockData.json";
import { useCallback, useMemo } from "react";
import { Column } from "react-table";

export default function Home() {
  const onGetPaginationControls = (row: PaginationProps) => {
    console.log(row);
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
      columns={columns as Column<Object>[]}
      sortable
      // onRowClick={onRowClickhandle}
      pageIndex={1}
      pageSize={30}
      getPaginationControls={onGetPaginationControls}
    />
  );
}
