/**
 * Describes a single solve from the user.
 *
 * @param id Unique id denoting the solve time - 36 char long v4 UUID.
 * @param time Solve time in milliseconds.
 */
export type Solve = {
  id: string;
  time: number;
};
