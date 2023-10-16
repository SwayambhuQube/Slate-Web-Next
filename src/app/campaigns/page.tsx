"use client";
import TableNavigationWrapper from "@/components/common/header/TableNavigationWrapper";
import TopContainer from "@/components/common/header/TopContainer";
import { assign, assignMetaData } from "@/store/features/campaignSlice";
import { set } from "date-fns";
import { da, tr } from "date-fns/locale";
import { use, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const objResponse = [];
const context = "orders";
export default function Campaigns() {
  const campaignsData = useSelector((state: any) => state.campaign.value);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPerPage, setSelectedPerPage] = useState(10);
  const [dateRange, setDateRange] = useState({
    startDate: "07-Jun-23",
    endDate: "08-Oct-23",
  });

  const handleStartChangeDate = (date: string) => {
    setDateRange({ ...dateRange, startDate: date });
  };
  const handleEndChangeDate = (date: string) => {
    setDateRange({ ...dateRange, endDate: date });
  };

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch(
          `/api/campaigns/${context}/${dateRange.startDate}/${dateRange.endDate}`
        );
        const data = await response.json();
        dispatch(assign(data));
        data.forEach(async (e: any) => {
          const response = await fetch(
            `/api/loadMetaData/${context}/${e.orderId}`
          );
          const data = await response.json();
          dispatch(assignMetaData({ orderId: e.orderId, metaData: data[0] }));
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchCampaigns();
  }, [dateRange]);

  useEffect(() => {
    console.log(campaignsData);
  }, [campaignsData]);
  return (
    <>
      <TopContainer title="Campaign" amount={5} isLoading={false} />
      <div className="w-fit h-fit bg-skin-bg ">
        <TableNavigationWrapper
          startDate={dateRange.startDate}
          count={objResponse?.length ?? 0}
          disabledPagination={false}
          endDate={dateRange.endDate}
          handleChangeEndDate={handleEndChangeDate}
          handleChangeStartDate={handleStartChangeDate}
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
