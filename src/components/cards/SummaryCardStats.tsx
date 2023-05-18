// import { Result } from "./SummaryCard";

// * COMPONENT: SummaryCardStats
function SummaryCardStats() {
  const renderScores = "";

  return (
    <div className="summary-stats">
      <h2 className="summary-stats__heading">Summary</h2>

      <div className="summary-stats__scores">{renderScores}</div>

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
