/** Import React hooks */
import { useState, useEffect, useRef, useContext } from "react";
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
  const [timeElapsed, timerStart, timerStop] = useTimer();
  /** State variable to prevent space down from triggering more than once */
  const [spaceDown, setSpaceDown] = useState(false);
  /** State: Scramble string */
  const [scramble, setScramble] = useState(getScramble());
  /** Ref: Alternate between starting timer, and doing nothing */
  const lock = useRef(true);

  useEffect(() => {
    /** Stop timer on space key down */
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== " " || spaceDown || lock.current) return;

      timerStop();
      setSpaceDown(true);
      addSolve({ time: timeElapsed });
    }

    /** Start timer on key up */
    function handleKeyUp(e: KeyboardEvent) {
      if (e.key !== " ") return;
      setSpaceDown(false);

      if (lock.current) {
        lock.current && timerStart();
      } else {
        setScramble(getScramble());
      }
      lock.current = !lock.current;
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [spaceDown, timerStart, timerStop, addSolve]);

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
