import { ScoreItem } from "../../types/score-item";
import SummaryCardStatItem from "./SummaryCardStatItem";

// import { Result } from "./SummaryCard";
interface Props {
  results: ScoreItem[];
}

// * COMPONENT: SummaryCardStats
function SummaryCardStats({ results }: Props) {
  const renderScores = results.map((result) => {
    return (
      <SummaryCardStatItem
        key={result.icon}
        category={result.category}
        score={result.score}
        icon={result.icon}
      />
    );
  });

  return (
    <div className="summary-stats">
      <h2 className="summary-stats__heading">Summary</h2>

      <div className="summary-stats__scores">{renderScores}</div>

      <button type="button" className="summary-stats__button">
        Continue
      </button>
    </div>
  );
}

export default SummaryCardStats;
