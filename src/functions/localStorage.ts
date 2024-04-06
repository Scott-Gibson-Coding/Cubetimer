/**
 * Functions for interacting with local storage. Wrap calls to localStorage in a try-catch
 * since the user can opt out of local storage. This throws a SecurityError.
 */

import { Solve } from "../types";

/**
 * @todo Implement this function
 */
export function updateLocalStorage(solves: Solve[]) {
  try {
    localStorage.setItem("solves-list", JSON.stringify(solves));
  } catch (error) {
    console.error(error);
  }
}

/**
 * @todo Implement this function
 */
export function fetchLocalStorage(): Solve[] {
  try {
    const solvesListJson = localStorage.getItem("solves-list");
    if (!solvesListJson) return [];
    return JSON.parse(solvesListJson) as Solve[];
  } catch (error) {
    console.error(error);
  }
  return [];
}

/**
 * @todo Implement this function
 */
export function clearLocalStorage() {
  try {
    localStorage.clear();
  } catch (error) {
    console.error(error);
  }
}
