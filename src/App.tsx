import { useEffect, useState } from "react";
import "./App.scss";
import SummaryCard from "./components/cards/SummaryCard";
import { ScoreItem } from "./types/score-item";
import { json } from "stream/consumers";

function App() {
  const [results, setResults] = useState<ScoreItem[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data/data.json");
        const jsonData: ScoreItem[] = await res.json();
        setResults(jsonData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return <main>{results && <SummaryCard results={results} />}</main>;
}

export default App;
