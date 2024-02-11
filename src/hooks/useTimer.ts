import { useState, useEffect } from "react";

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
  /** State: Boolean flag for when the timer is active */
  const [active, setActive] = useState(false);
  /** State: Current time elapsed returned from hook */
  const [timeElapsed, setTimeElapsed] = useState<number>(0);

  /** Start the timer by setting up an interval */
  function timerStart() {
    setStartTime(Date.now());
    setActive(true);
  }

  /** Clear the interval and set the final time */
  function timerStop() {
    setActive(false);
  }

  /** Timer interval will start whenever the startTime is updated. */
  useEffect(() => {
    if (startTime === null) return;

    let interval: NodeJS.Timeout;

    if (active) {
      interval = setInterval(() => {
        setTimeElapsed(Date.now() - startTime);
      }, epoch);
    } else {
      clearInterval(interval!);
    }
    return () => clearInterval(interval);
  }, [active]);

  return [timeElapsed, timerStart, timerStop];
}

export default useTimer;
