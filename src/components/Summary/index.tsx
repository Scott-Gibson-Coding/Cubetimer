import { useCallback, useContext } from "react";
import { SolvesContext } from "../../contexts/SolvesContext";
import { formatTime } from "../../utils";

const Summary = () => {
  /** Contexts */
  const { solves } = useContext(SolvesContext);

  const getBest = useCallback(() => {
    if (solves.length === 0) return 0;
    let minTime = solves[0].time;
    solves.forEach((solve) => {
      minTime = Math.min(minTime, solve.time);
    });
    return minTime;
  }, [solves]);

  const getAvg5 = useCallback(() => {
    if (solves.length === 0) return 0;
    const subset = solves.slice(0, 5);
    return subset.reduce((acc, cur) => acc + cur.time, 0) / subset.length;
  }, [solves]);

  const getAvg10 = useCallback(() => {
    if (solves.length === 0) return 0;
    const subset = solves.slice(0, 10);
    return subset.reduce((acc, cur) => acc + cur.time, 0) / subset.length;
  }, [solves]);

  return (
    <div className="w-full border-2 border-black p-8">
      <div className="grid max-w-[480px] gap-4 rounded-lg bg-primary px-8 py-4 text-light">
        <h1 className="text-center text-xl font-semibold">Summary</h1>
        <div className="mx-auto h-[40vh] w-full overflow-y-auto rounded border-4 border-slate-700 bg-secondary p-2">
          <p className="text-slate-800">Best Solve: {formatTime(getBest())}</p>
          <p className="text-slate-800">
            Average of 5: {formatTime(getAvg5())}
          </p>
          <p className="text-slate-800">
            Average of 10: {formatTime(getAvg10())}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
