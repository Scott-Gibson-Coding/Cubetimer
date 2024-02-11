import { formatTime } from "../../utils";
import type { Solve } from "../../types";

type StatsProps = {
  solves: Array<Solve>;
  clearTimes: () => void;
};
const Stats = ({ solves, clearTimes }: StatsProps) => {
  return (
    <div className="border-2 border-black p-8">
      {/* Stats card */}
      <div className="grid gap-4 rounded-lg bg-primary px-8 py-4 text-light">
        {/* Buttons */}
        <div className="flex justify-center font-semibold underline underline-offset-2">
          {/* Prevent default on mouse down so spacebar doesn't activate clearTimes function call */}
          <button onClick={clearTimes} onMouseDown={(e) => e.preventDefault()}>
            Clear Times
          </button>
        </div>
        {/* Times list card */}
        <div className="mx-auto h-[40vh] w-80 overflow-y-auto rounded border-4 border-slate-700 bg-secondary p-2">
          <ul>
            {solves.map(({ time }, index) => (
              <li key={index} className="flex justify-around text-dark">
                <span className="font-semibold">{solves.length - index}</span>
                <span className="font-mono tracking-tight">
                  {formatTime(time)}
                </span>
                <span className="">
                  <button className="font-semibold underline underline-offset-2">
                    x
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Stats;
