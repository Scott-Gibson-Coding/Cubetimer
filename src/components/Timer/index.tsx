import { useEffect } from "react";
import useTimer from "../../hooks/useTimer";

const Timer = () => {
  /** useTimer hook */
  const [timeElapsed, timerStart, timerStop] = useTimer();
  /** Mock scramble */
  const scramble =
    "D R2 D2 U' B2 D' R2 U2 R B L' R' F L2 U' L B F2 L F' L2 D' B' U F";

  useEffect(() => {
    timerStart();
    return () => {
      timerStop();
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
      <div className=" text-center text-8xl">
        {timeElapsed}
        {/**00:00.000*/}
      </div>
    </div>
  );
};

export default Timer;
