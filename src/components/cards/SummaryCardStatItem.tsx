interface Props {
  category: "Reaction" | "Memory" | "Verbal" | "Visual";
  score: number;
  icon: string;
}

// * COMPONENT: SummaryCardStatItem
function SummaryCardStatItem({ category, score, icon }: Props) {
  let colorMix: "red" | "yellow" | "green" | "blue";
  switch (category) {
    case "Reaction":
      colorMix = "red";
      break;
    case "Memory":
      colorMix = "yellow";
      break;
    case "Verbal":
      colorMix = "green";
      break;
    default:
      colorMix = "blue";
      break;
  }

  return (
    <div className={"summary-stat " + colorMix}>
      <div className="summary-stat__icon-title">
        <img src={icon} alt={category} className="summary-stat__icon" />

        <h3 className="summary-stat__category">{category}</h3>
      </div>

      <p className="summary-stat__result">
        <span className="summary-stat__result-value">{score}</span> / 100
      </p>
    </div>
  );
}

export default SummaryCardStatItem;
