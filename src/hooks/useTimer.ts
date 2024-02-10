import { useState, useRef, useEffect } from "react";

/**
 * Return types from useTimer
 *
 * - timeElapsed: number
 * - startTimer: () => void
 * - endTimer: () => void
 */
type UseTimerReturn = [number, () => void, () => void];
/**
 * useTimer hook
 *
 * Exposes timeElapsed state, and functions to interact with the timer.
 */
function useTimer(): UseTimerReturn {
  /** Interval interrupt in ms. */
  const epoch = 36;
  /** State: Timer start time found by Date.now() */
  const [startTime, setStartTime] = useState<number | null>(null);
  /** State: Current time elapsed returned from hook */
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  /** Ref: Holds the setInterval value */
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  /** Start the timer by setting up an interval */
  function timerStart() {
    setStartTime(Date.now());
  }

  /** Clear the interval and set the final time */
  function timerStop() {
    clearInterval(intervalRef.current!);
  }

  /** Effect: Remove interval ref if it exists on component unmount */
  useEffect(() => {
    return () => {
      intervalRef.current && clearInterval(intervalRef.current);
    };
  }, []);

  /** Timer interval will start whenever the startTime is updated. */
  useEffect(() => {
    if (startTime === null) return;

    intervalRef.current = setInterval(() => {
      setTimeElapsed(Date.now() - startTime);
    }, epoch);
    return () => clearInterval(intervalRef.current!);
  }, [startTime]);

  return [timeElapsed, timerStart, timerStop];
}

export default useTimer;
