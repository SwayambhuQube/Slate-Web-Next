"use client";

import { Table } from "@/components/common/table/table";
import fakeData from "@/app/mockData.json";

export default function Home() {
  return <Table data={fakeData} />;
}
