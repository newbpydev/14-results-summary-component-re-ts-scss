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

      <button type="button">Continue</button>

      {/* Reaction
      <div className="summary-stats__scores">
        <div className="summary-stats__score">
          <span className="summary-stats__score-icon">icon</span>
          <h3 className="summary-stats__score-title">Reaction</h3>
          <p className="summary-stats__score-result">
            <span className="summary-stats__value">{reaction}</span> / 100
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default SummaryCardStats;
