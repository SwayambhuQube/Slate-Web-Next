import React from "react";
import { Lens, LensOutlined } from "@mui/icons-material";

import {
  IOrdersSummaryResponse,
  IOrderSummaryStructure,
} from "@/types/response";

interface ISummary {
  summaryCardStructure: IOrderSummaryStructure[];
  summaryResponse?: IOrdersSummaryResponse | any;
}

const SummaryCard: React.FC<ISummary> = ({
  summaryResponse,
  summaryCardStructure,
}) => {
  const summaries = summaryCardStructure.map((item, index: number) => {
    let lens;

    if (
      item.response === "noOfPlaned" ||
      item.response === "problematicPercent"
    ) {
      lens = <LensOutlined className={item.className} />;
    } else {
      lens = <Lens className={item.className} />;
    }
    let count: number = 0;

    if (typeof summaryResponse !== "undefined" && summaryResponse !== null) {
      count = summaryResponse[item.response];
    }

    return (
      <div className="summaryItem" key={item.label + index}>
        {lens}
        <span className="itemCount">{count}</span>
        <span className="itemLabel">{item.label}</span>
      </div>
    );
  });

  return <> {summaries}</>;
};

export default SummaryCard;
