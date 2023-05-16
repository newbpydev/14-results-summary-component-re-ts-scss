// import { useState } from "react";

import { useState } from "react";
import "./App.scss";
import SummaryCard, { Result } from "./components/cards/SummaryCard";

function App() {
  const [result, setResult] = useState<Result>();

  return <main>{result && <SummaryCard result={result} />}x</main>;
}

export default App;
