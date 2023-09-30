import React from "react";

interface IExpandableTable {
  isLoading: boolean;
  amount?: number;
  title: string;
}

const TopContainer: React.FC<IExpandableTable> = ({
  isLoading,
  amount,
  title,
}) => (
  <div className="bg-white h-16 flex items-center justify-between mb-4 pt-1">
    <div className="ml-5 flex items-center gap-2">
      <span className="font-semibold text-2xl flex justify-center items-center gap-2.5 tracking-tight">
        {title}{" "}
        <span className="flex items-center gap-2 bg-[#e6ecf0] rounded-3xl w-auto h-8 font-normal text-lg leading-6 pl-2 pr-2 ">
          {isLoading ? "Loading..." : amount}
        </span>
      </span>
    </div>
    <div className="mr-5" />
  </div>
);

export default TopContainer;
