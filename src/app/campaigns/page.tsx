"use client";
import TableNavigationWrapper from "@/components/common/header/TableNavigationWrapper";
import TopContainer from "@/components/common/header/TopContainer";
import { useState } from "react";
const objResponse = [];
export default function Campaigns() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPerPage, setSelectedPerPage] = useState(10);

  const handleChangeDate = (date: any) => {
    console.log(date);
  };

  return (
    <>
      <TopContainer title="Campaign" amount={5} isLoading={false} />
      <div className="w-fit h-fit bg-skin-bg ">
        <TableNavigationWrapper
          startDate={"07-Jun-23"}
          count={objResponse?.length ?? 0}
          disabledPagination={false}
          endDate={new Date().toString()}
          handleChangeEndDate={handleChangeDate}
          handleChangeStartDate={handleChangeDate}
          page={0}
          rowsPerPage={10}
          rowsPerPageOptions={[10, 25, 50, objResponse?.length ?? 0]}
          showPagination
          onPageChange={(_, page) => {
            setCurrentPage(page);
          }}
          onRowsPerPageChange={(e) => {
            setSelectedPerPage(+e.target.value);
            setCurrentPage(0);
          }}
        />
      </div>
    </>
  );
}
