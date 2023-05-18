/**
 * Finds all common items between two arrays.
 *
 * @param arr1 The first array from which to generate an intersection with `arr2`.
 * @param arr2 The second array from which to generate an intersection with `arr1`.
 * @returns An array containing all items shared by both arrays.
 */
export declare function arrayIntersection<T = unknown>(arr1: T[], arr2: T[]): T[];
/**
 * Finds all deeply common items between two arrays.
 * Deep equality is powered by `@santi100/equal-lib`.
 *
 * @param arr1 The first array from which to generate an intersection with `arr2`.
 * @param arr2 The second array from which to generate an intersection with `arr1`.
 * @returns An array containing all items shared by both arrays.
 */
export declare function deepArrayIntersection<T = unknown>(arr1: T[], arr2: T[]): T[];
