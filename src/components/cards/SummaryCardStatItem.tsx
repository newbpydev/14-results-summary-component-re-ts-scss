interface Props {
  category: "Reaction" | "Memory" | "Verbal" | "Visual";
  score: number;
  icon: string;
}

// * COMPONENT: SummaryCardStatItem
function SummaryCardStatItem({ category, score, icon }: Props) {
  // switch (category) {
  //   case 'reaction':
  //     renderIcon =
  //     break;

  //   default:
  //     break;
  // }

  return (
    <div className="summary-stats__score">
      <img src={icon} alt={category} className="summary-stats__score-icon" />

      <h3 className="summary-stats__score-category">{category}</h3>
      <p className="summary-stats__score-result">
        <span className="summary-stats__value">{score}</span> / 100
      </p>
    </div>
  );
}

export default SummaryCardStatItem;
