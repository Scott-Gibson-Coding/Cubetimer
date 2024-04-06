/** Get a random face of the cube. */
const getRandomSide = () => {
  const sides = ["R", "L", "F", "B", "U", "D"];
  return sides[Math.floor(Math.random() * sides.length)];
};

/** Get a random turn amount [90deg, -90deg, 180deg] */
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

/**
 * Returns a scramble for the 3x3 rubik's cube.
 *
 * @param length Length of the scramble, default is 20.
 */
export default function getScramble(length = 20) {
  /** Logic for constructing moves array */
  const moves: string[] = [];
  while (moves.length < length) {
    const side = getRandomSide();

    if (
      // can't turn the same side two turns in a row
      !(moves.length >= 1 && moves[moves.length - 1].startsWith(side)) &&
      // can't turn parallel sides three turns in a row
      !(
        moves.length >= 2 &&
        moves[moves.length - 2].startsWith(side) &&
        moves[moves.length - 1].startsWith(getOppositeSide(side))
      )
    ) {
      const turn = getRandomTurn();
      moves.push(`${side}${turn}`);
    }
  }

  return moves.join(" ");
}
