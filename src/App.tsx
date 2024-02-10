import { Timer, Stats } from "./components";
import type { Solve } from "./types";

function App() {
  const mockSolves: Array<Solve> = [
    { time: 5555 },
    { time: 6573 },
    { time: 8201 },
    { time: 5555 },
    { time: 6573 },
    { time: 8201 },
    { time: 5555 },
    { time: 6573 },
    { time: 8201 },
  ];

  return (
    <div className="mx-8 grid grid-cols-[940px_540px] text-lg">
      <Timer />
      <Stats solves={mockSolves} />
    </div>
  );
}

export default App;
