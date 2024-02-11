import { useState } from "react";
import { Timer, Stats } from "./components";
import type { Solve } from "./types";

function App() {
  const [solves, setSolves] = useState<Solve[]>([]);

  function handleAddTime(newTime: number) {
    setSolves((solves) => [{ time: newTime }, ...solves]);
  }

  function handleClearTimes() {
    setSolves([]);
  }

  return (
    <div className="mx-8 grid grid-cols-[940px_540px] text-lg">
      <Timer addTime={(time) => handleAddTime(time)} />
      <Stats solves={solves} clearTimes={handleClearTimes} />
    </div>
  );
}

export default App;
