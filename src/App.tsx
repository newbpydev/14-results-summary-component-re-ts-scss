// import { useState } from "react";

import { useEffect, useState } from "react";
import "./App.scss";
import SummaryCard from "./components/cards/SummaryCard";
import { ScoreItem } from "./types/score-item";

function App() {
  const [result, setResult] = useState<ScoreItem[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data/data.json");
        console.log(res);
        const jsonData = await res.json();
        console.log(jsonData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return <main>{result && <SummaryCard result={result} />}</main>;
}

export default App;
