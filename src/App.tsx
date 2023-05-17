// import { useState } from "react";

import { useState } from "react";
import "./App.scss";
import SummaryCard, { Result } from "./components/cards/SummaryCard";

function App() {
  const [result, setResult] = useState<Result>({
    reaction: 80,
    memory: 92,
    verval: 61,
    visual: 73,
  });

  return <main>{result && <SummaryCard result={result} />}</main>;
}

export default App;
