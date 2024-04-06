/**
 * Return time formatted to 00:00.000
 *
 * @param time - Time in milliseconds
 */
export default function formatTime(time: number) {
  const ms = time % 1000;
  time = Math.round((time - ms) / 1000);
  const sec = time % 60;
  time = Math.round((time - sec) / 60);
  const min = Math.round(time);

  return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}.${ms.toString().padStart(3, "0")}`;
}
