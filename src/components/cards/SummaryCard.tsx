import { ScoreItem } from "../../types/score-item";
import SummaryCardAverageScore from "./SummaryCardAverageScore";
import SummaryCardStats from "./SummaryCardStats";

// export interface Result {
//   reaction: number;
//   memory: number;
//   verval: number;
//   visual: number;
// }

interface Props {
  result: ScoreItem[];
}

function SummaryCard({ result }: Props) {
  return (
    <article>
      <SummaryCardAverageScore score={76.5} />
      <SummaryCardStats />
    </article>
  );
}

export default SummaryCard;
