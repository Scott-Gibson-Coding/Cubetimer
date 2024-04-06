/**
 * Functions for interacting with local storage. Wrap calls to localStorage in a try-catch
 * since the user can opt out of local storage. This throws a SecurityError.
 */

/**
 * @todo Implement this function
 */
export function updateLocalStorage() {
  try {
    localStorage.setItem("solves-list", "not implemented yet");
  } catch (error) {
    console.error(error);
  }
}

/**
 * @todo Implement this function
 */
export function fetchLocalStorage() {
  try {
    localStorage.getItem("solves-list");
  } catch (error) {
    console.error(error);
  }
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
