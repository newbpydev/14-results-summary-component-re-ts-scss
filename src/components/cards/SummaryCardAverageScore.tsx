interface Props {
  score: number;
}

// * COMPONENT: SummaryCardAverageScore
function SummaryCardAverageScore({ score }: Props) {
  return (
    <div className="average-score">
      <h1 className="average-score__title">Your Result</h1>

      <div className="average-score__results">
        <h2 className="average-score__results-score">{score}</h2>
        <p className="average-score__results-out-of">of 100</p>
      </div>

      <div className="average-score__info">
        <h2 className="average-score__info-grade">Great</h2>
        <p className="average-score__info-description">
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
    </div>
  );
}

export default SummaryCardAverageScore;
