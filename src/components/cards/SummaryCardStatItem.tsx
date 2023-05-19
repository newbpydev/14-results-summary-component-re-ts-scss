interface Props {
  category: "Reaction" | "Memory" | "Verbal" | "Visual";
  score: number;
  icon: string;
}

// * COMPONENT: SummaryCardStatItem
function SummaryCardStatItem({ category, score, icon }: Props) {
  let colorMix: "red" | "yellow" | "green" | "blue";
  let color: "#ff5555" | "#ffb21e" | "#00bb8f" | "#1125d6";
  switch (category) {
    case "Reaction":
      // color = "#ff5555";
      colorMix = "red";
      break;
    case "Memory":
      // color = "#ffb21e";
      colorMix = "yellow";
      break;
    case "Verbal":
      // color = "#00bb8f";
      colorMix = "green";
      break;
    default:
      // color = "#1125d6";
      colorMix = "blue";
      break;
  }

  return (
    <div className={"summary-stat " + colorMix}>
      <div className="summary-stat__icon-title">
        <img src={icon} alt={category} className="summary-stat__icon" />

        <h3 className="summary-stat__category" style={{ color: color }}>
          {category}
        </h3>
      </div>

      <p className="summary-stat__result">
        <span className="summary-stat__result-value">{score}</span> / 100
      </p>
    </div>
  );
}

export default SummaryCardStatItem;
