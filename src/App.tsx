import { useEffect, useState } from "react";
import "./App.scss";
import SummaryCard from "./components/cards/SummaryCard";
import { ScoreItem } from "./types/score-item";
import { json } from "stream/consumers";

function App() {
  const [result, setResult] = useState<ScoreItem[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data/data.json");
        const jsonData: ScoreItem[] = await res.json();
        setResult(jsonData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return <main>{result && <SummaryCard result={result} />}</main>;
}

export default App;
