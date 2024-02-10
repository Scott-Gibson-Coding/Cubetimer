/**
 * Return time formatted to 00:00.000
 *
 * @param time - Time in milliseconds
 */
export function formatTime(time: number) {
  const ms = time % 1000;
  time = Math.round((time - ms) / 1000);
  const sec = time % 60;
  time = Math.round((time - sec) / 60);
  const min = Math.round(time);

  return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}.${ms.toString().padStart(3, "0")}`;
}

/**
 * Returns a scramble for the 3x3 rubik's cube.
 *
 * @param length Length of the scramble, default is 20
 */
export function getScramble(length: number = 20) {
  /** Returns a random face of the cube. */
  const getRandomSide = () => {
    const sides = ["R", "L", "F", "B", "U", "D"];
    return sides[Math.floor(Math.random() * sides.length)];
  };
  /** Returns a random turn amount [90deg, -90deg, 180deg] */
  const getRandomTurn = () => {
    const turns = ["", "'", "2"];
    return turns[Math.floor(Math.random() * turns.length)];
  };
  /** Returns the opposite side of a given face */
  const getOppositeSide = (side: string) => {
    const oppositeSideMap: Record<string, string> = {
      R: "L",
      L: "R",
      F: "B",
      B: "F",
      U: "D",
      D: "U",
    };
    return oppositeSideMap[side];
  };

  /** Logic for constructing moves array */
  let moves: string[] = [];
  while (moves.length < length) {
    const side = getRandomSide();

    if (
      // can't turn the same side two turns in a row
      (moves.length >= 1 && moves[moves.length - 1][0] === side) ||
      // can't turn parallel sides three turns in a row
      (moves.length >= 2 &&
        moves[moves.length - 2][0] === side &&
        moves[moves.length - 1][0] === getOppositeSide(side))
    ) {
      continue;
    }

    const turn = getRandomTurn();
    moves.push(`${side}${turn}`);
  }

  return moves.join(" ");
}
