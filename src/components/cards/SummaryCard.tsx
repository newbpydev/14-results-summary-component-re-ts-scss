import { ScoreItem } from "../../types/score-item";
import SummaryCardAverageScore from "./SummaryCardAverageScore";
import SummaryCardStats from "./SummaryCardStats";

interface Props {
  result: ScoreItem[];
}

// * COMPONENT: SummaryCard
function SummaryCard({ result }: Props) {
  const score = Math.floor(
    result.reduce((sum, score) => sum + score.score, 0) / result.length
  );

  return (
    <article>
      <SummaryCardAverageScore score={score} />
      <SummaryCardStats />
    </article>
  );
}

export default SummaryCard;
