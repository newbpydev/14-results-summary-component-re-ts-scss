import React from "react";
import SummaryCardAverageScore from "./SummaryCardAverageScore";
import SummaryCardList from "./SummaryCardList";

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
      <SummaryCardList />
    </section>
  );
}

export default SummaryCard;
