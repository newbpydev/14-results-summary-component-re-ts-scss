interface Props {
  title: "Reaction" | "Memory" | "Verbal" | "Visual";
  score: number;
  icon: string;
}

// * COMPONENT: SummaryCardStatItem
function SummaryCardStatItem({ title, score, icon }: Props) {
  const renderIcon = `${icon}`;

  // switch (title) {
  //   case 'reaction':
  //     renderIcon =
  //     break;

  //   default:
  //     break;
  // }

  return (
    <div className="summary-stats__score">
      {/* <image href={renderIcon} className="summary-stats__score-icon"/> */}

      <h3 className="summary-stats__score-title">{title}</h3>
      <p className="summary-stats__score-result">
        <span className="summary-stats__value">{score}</span> / 100
      </p>
    </div>
  );
}

export default SummaryCardStatItem;
