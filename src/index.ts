import { assertArray } from '@santi100/assertion-lib';
import { deepEquality } from '@santi100/equal-lib';

function __deepIndexOf(arr: unknown[], item: unknown) {
	for (let i = 0; i < arr.length; i++) {
		const arrayItem = arr[i];
		if (!deepEquality(arrayItem, item)) continue;
		return i;
	}
	return -1;
}
/**
 * Finds all common items between two arrays.
 *
 * @param arr1 The first array from which to generate an intersection with `arr2`.
 * @param arr2 The second array from which to generate an intersection with `arr1`.
 * @returns An array containing all items shared by both arrays.
 */
export function arrayIntersection<T = unknown>(arr1: T[], arr2: T[]) {
	assertArray(arr1, 'arr1');
	assertArray(arr2, 'arr2');

	const intersection = [];
	for (const item of arr1) {
		if (arr2.indexOf(item) !== -1) intersection.push(item);
	}
	return intersection;
}

/**
 * Finds all deeply common items between two arrays.
 * Deep equality is powered by `@santi100/equal-lib`.
 *
 * @param arr1 The first array from which to generate an intersection with `arr2`.
 * @param arr2 The second array from which to generate an intersection with `arr1`.
 * @returns An array containing all items shared by both arrays.
 */
export function deepArrayIntersection<T = unknown>(arr1: T[], arr2: T[]) {
	assertArray(arr1, 'arr1');
	assertArray(arr2, 'arr2');

	const intersection = [];
	for (const item of arr1) {
		if (__deepIndexOf(arr2, item) !== -1) intersection.push(item);
	}
	return intersection; 
}
