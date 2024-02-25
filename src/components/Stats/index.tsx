/** Import React Hooks */
import { useContext } from "react";
/** Import Contexts */
import { SolvesContext } from "../../contexts/SolvesContext";
/** Import Components */
import TimesList from "./TimesList";

const Stats = () => {
  /** Contexts */
  const { clearSolves } = useContext(SolvesContext);

  return (
    <div className="w-full border-2 border-black p-8">
      {/* Stats card */}
      <div className="grid max-w-[480px] gap-4 rounded-lg bg-primary px-8 py-4 text-light">
        {/* Buttons */}
        <div className="flex justify-center font-semibold underline underline-offset-2">
          {/* Prevent default on mouse down so spacebar doesn't activate clearTimes function call */}
          <button onClick={clearSolves} onMouseDown={(e) => e.preventDefault()}>
            Clear Times
          </button>
        </div>
        {/* Times list card */}
        <TimesList />
      </div>
    </div>
  );
};

export default Stats;
