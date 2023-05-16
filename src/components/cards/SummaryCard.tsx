import React from "react";

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
  return <article>SummaryCard</article>;
}

export default SummaryCard;
