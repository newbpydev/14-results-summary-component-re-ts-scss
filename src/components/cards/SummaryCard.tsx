import React from "react";
import SummaryCardAverageScore from "./SummaryCardAverageScore";
import SummaryCardStats from "./SummaryCardStats";

export interface Result {
  reaction: number;
  memory: number;
  verval: number;
  visual: number;
}

interface Props {
  result: Result;
}

function SummaryCard({ result }: Props) {
  return (
    <section>
      <SummaryCardAverageScore />
      <SummaryCardStats />
    </section>
  );
}

export default SummaryCard;
