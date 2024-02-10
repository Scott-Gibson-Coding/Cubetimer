import { Timer, Table } from "./components";
import type { Solve } from "./types";

function App() {
  const mockSolves: Array<Solve> = [
    { time: 5.555 },
    { time: 6.573 },
    { time: 8.201 },
    { time: 5.555 },
    { time: 6.573 },
    { time: 8.201 },
    { time: 5.555 },
    { time: 6.573 },
    { time: 8.201 },
  ];

  return (
    <div className="">
      <Timer />
      <Table solves={mockSolves} />
    </div>
  );
}

export default App;
