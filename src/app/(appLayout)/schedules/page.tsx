"use client";
import { Table } from "@/components/common/table/Table";
import React from "react";
import TableData from "@/components/common/table/campaigns.json";

interface Props {
  // Define the props for your component here
}

const MyComponent: React.FC<Props> = (props) => {
  // Implement your component logic here
  const coulumns = [
    {
      accessor: "name",
      header: "Campaign",
    },
    {
      accessor: "createdAt",
      header: "Created At",
    },
    {
      accessor: "advertiserName",
      header: "Created For",
    },
  ];
  return <div>{/* <Table columns={coulumns} data={TableData.data} /> */}</div>;
};

export default MyComponent;
