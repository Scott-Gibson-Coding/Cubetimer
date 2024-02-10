import { useEffect, useRef, useState } from "react";
import useTimer from "../../hooks/useTimer";
import { formatTime, getScramble } from "../../utils";

/**
 * Timer component
 */
const Timer = () => {
  /** useTimer hook */
  const [timeElapsed, timerStart, timerStop] = useTimer();
  /** State: Scramble string */
  const [scramble, setScramble] = useState(getScramble());

  /** Stop timer on space key down */
  function handleKeyDown(e: KeyboardEvent) {
    if (e.key !== " ") return;
    timerStop();
  }

  /**
   * Start timer behavior:
   * On first space key up, start timer
   * On second space key up, do nothing
   * Repeat this pattern...
   */
  const lock = useRef(true);
  function handleKeyUp(e: KeyboardEvent) {
    if (e.key !== " ") return;
    document.addEventListener("keydown", handleKeyDown, { once: true });

    lock.current && timerStart();
    !lock.current && setScramble(getScramble());
    lock.current = !lock.current;
  }

  /**
   * Effect: On component mount
   */
  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);
    // use { once: true } to prevent calling timerStop more than once
    document.addEventListener("keydown", handleKeyDown, { once: true });
    // remove event listeners on component unmount
    return () => {
      document.removeEventListener("keyup", handleKeyUp);
      document.addEventListener("keydown", handleKeyDown, { once: true });
    };
  }, []);

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
