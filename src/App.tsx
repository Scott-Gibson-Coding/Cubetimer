import { useState } from "react";
import { SolvesContext } from "./contexts/SolvesContext";
import { Timer, Stats } from "./components";
import type { Solve } from "./types";

function App() {
  const [solves, setSolves] = useState<Solve[]>([]);

  function addSolve(solve: Solve) {
    setSolves((solves) => [solve, ...solves]);
  }

  function deleteSolve(index: number) {
    setSolves((solves) => [
      ...solves.slice(0, index),
      ...solves.slice(index + 1),
    ]);
  }

  function clearSolves() {
    setSolves([]);
  }

  return (
    <div className="grid grid-cols-[1fr_1fr] text-lg">
      <SolvesContext.Provider
        value={{ solves, addSolve, deleteSolve, clearSolves }}
      >
        <Timer />
        <Stats />
      </SolvesContext.Provider>
    </div>
  );
}

export default App;
