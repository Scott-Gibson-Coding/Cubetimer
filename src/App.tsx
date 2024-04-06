import { useState } from "react";
import { SolvesContext } from "./contexts/SolvesContext";
import { Timer, Stats, Summary } from "./components";
import {
  updateLocalStorage,
  fetchLocalStorage,
  clearLocalStorage,
} from "./functions/localStorage";
import type { Solve } from "./types";

function App() {
  const [solves, setSolves] = useState<Solve[]>(fetchLocalStorage() || []);

  function addSolve(time: number) {
    const newSolve: Solve = {
      id: self.crypto.randomUUID(),
      time,
    };
    setSolves((solves) => {
      updateLocalStorage([newSolve, ...solves]);
      return [newSolve, ...solves];
    });
  }

  function deleteSolve(index: number) {
    setSolves((solves) => {
      updateLocalStorage([
        ...solves.slice(0, index),
        ...solves.slice(index + 1),
      ]);
      return [...solves.slice(0, index), ...solves.slice(index + 1)];
    });
  }

  function clearSolves() {
    setSolves([]);
    clearLocalStorage();
  }

  return (
    <SolvesContext.Provider
      value={{ solves, addSolve, deleteSolve, clearSolves }}
    >
      <div className="grid grid-cols-[2fr_1fr_1fr] text-lg">
        <Timer />
        <Stats />
        <Summary />
      </div>
    </SolvesContext.Provider>
  );
}

export default App;
