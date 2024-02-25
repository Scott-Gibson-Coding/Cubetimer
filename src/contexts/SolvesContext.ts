import { createContext } from "react";
import type { Solve } from "../types";

/** @todo Replace contents with reducer */
type SolvesContext = {
  solves: Solve[];
  addSolve: (solve: Solve) => void;
  deleteSolve: (index: number) => void;
  clearSolves: () => void;
};
/** Replace the default defined here with useSolvesContext hook. */
export const SolvesContext = createContext<SolvesContext>({
  solves: [],
  addSolve: () => {},
  deleteSolve: () => {},
  clearSolves: () => {},
});
