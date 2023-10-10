"use client";

import { Table } from "@/components/common/table/table";
import fakeData from "@/app/mockData.json";
import { useMemo } from "react";
import { Column } from "react-table";

function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}: any) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = useMemo(() => {
    const options: any = new Set();
    preFilteredRows.forEach((row: any) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <select
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
export default function Home() {
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
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "University",
        accessor: "university",
      },
    ],
    []
  );
  const getData = async () => {
    setTimeout(() => {
      return fakeData;
    }, 3000);
  };
  return (
    <Table data={fakeData} columns={columns as Column<Object>[]} sortable />
  );
}
