import { Timer, Stats } from "./components";
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
    <div className="mx-8 grid grid-cols-[940px_540px] text-lg">
      <Timer />
      <Stats solves={mockSolves} />
    </div>
  );
}

export default App;
