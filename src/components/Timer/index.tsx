/** Import React hooks */
import { useState, useEffect, useRef, useContext, useCallback } from "react";
/** Import Custom Hooks */
import useTimer from "../../hooks/useTimer";
/** Import Contexts */
import { SolvesContext } from "../../contexts/SolvesContext";
/** Import Utils */
import { formatTime, getScramble } from "../../utils";

/**
 * Timer component
 */
const Timer = () => {
  /** Context */
  const { addSolve } = useContext(SolvesContext);

  /** useTimer hook */
  const { timeElapsed, timerStart, timerStop } = useTimer();
  /** State: Scramble string */
  const [scramble, setScramble] = useState(getScramble());
  /** Ref: Use to swich between mouse up starting timer, and doing nothing. */
  const lockRef = useRef(true);

  /** Key down event handler - Stop timer if in progress. */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key !== " ") return;
      timerStop();
      addSolve(timeElapsed);
      setScramble(getScramble());
    },
    [addSolve, timeElapsed, timerStop],
  );

  /** Key up event handler */
  const handleKeyUp = useCallback(
    (e: KeyboardEvent) => {
      if (e.key !== " ") return;
      if (lockRef.current) {
        timerStart();
        document.addEventListener("keydown", handleKeyDown, {
          once: true,
        });
      }
      lockRef.current = !lockRef.current;
    },
    [timerStart, handleKeyDown],
  );

  /** Effect: Add key up event listener on component mount. */
  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyUp]);

  /** Effect: Remove the keydown event when the callback changes or the component unmounts. */
  useEffect(() => {
    document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="grid content-center gap-2 border-2 border-black px-8 font-mono">
      <h1 className="text-8xl">Cubetimer</h1>
      {/* Scramble div */}
      <div className="mb-8 rounded bg-primary p-1">
        <p className="text-center text-xl text-light">
          Scramble: <span className="tracking-tighter">{scramble}</span>
        </p>
      </div>
      {/* Timer div */}
      <div className=" text-center text-8xl">{formatTime(timeElapsed)}</div>
    </div>
  );
};

export default Timer;
