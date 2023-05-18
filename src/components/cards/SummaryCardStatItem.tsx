interface Props {
  category: "Reaction" | "Memory" | "Verbal" | "Visual";
  score: number;
  icon: string;
}

// * COMPONENT: SummaryCardStatItem
function SummaryCardStatItem({ category, score, icon }: Props) {
  const renderIcon = `${icon}`;

  // switch (category) {
  //   case 'reaction':
  //     renderIcon =
  //     break;

  //   default:
  //     break;
  // }

  return (
    <div className="summary-stats__score">
      {/* <image href={renderIcon} className="summary-stats__score-icon"/> */}
      <img src={icon} alt={category} />

      <h3 className="summary-stats__score-category">{category}</h3>
      <p className="summary-stats__score-result">
        <span className="summary-stats__value">{score}</span> / 100
      </p>
    </div>
  );
}

export default SummaryCardStatItem;
