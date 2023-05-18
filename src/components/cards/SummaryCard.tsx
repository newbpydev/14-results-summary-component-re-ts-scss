import { ScoreItem } from "../../types/score-item";
import SummaryCardAverageScore from "./SummaryCardAverageScore";
import SummaryCardStats from "./SummaryCardStats";

interface Props {
  results: ScoreItem[];
}

// * COMPONENT: SummaryCard
function SummaryCard({ results }: Props) {
  const score = Math.floor(
    results.reduce((sum, score) => sum + score.score, 0) / results.length
  );
  return (
    <article>
      <SummaryCardAverageScore score={score} />
      <SummaryCardStats results={results} />
    </article>
  );
}

export default SummaryCard;
