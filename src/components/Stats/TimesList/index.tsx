/** Import React Hooks */
import { useContext } from "react";
/** Import Contexts */
import { SolvesContext } from "../../../contexts/SolvesContext";
import { formatTime } from "../../../utils";

function TimesList() {
  /** Contexts */
  const { solves, deleteSolve } = useContext(SolvesContext);

  return (
    <div className="mx-auto h-[40vh] w-full overflow-y-auto rounded border-4 border-slate-700 bg-secondary p-2">
      <ul>
        {solves.map(({ time }, index) => (
          <li key={index} className="flex justify-around text-dark">
            {/* Solve index */}
            <span className="font-semibold">{solves.length - index}</span>
            {/* Solve time */}
            <span className="font-mono tracking-tight">{formatTime(time)}</span>
            {/* Delete Solve Button */}
            <button
              className="text-xl font-bold text-blue-800 underline underline-offset-2"
              onClick={(e) => {
                (e.target as HTMLElement).blur();
                deleteSolve(index);
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TimesList;
