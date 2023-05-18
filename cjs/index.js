"use strict";
exports.__esModule = true;
exports.deepArrayIntersection = exports.arrayIntersection = void 0;
var assertion_lib_1 = require("@santi100/assertion-lib");
var equal_lib_1 = require("@santi100/equal-lib");
function __deepIndexOf(arr, item) {
    for (var i = 0; i < arr.length; i++) {
        var arrayItem = arr[i];
        if (!(0, equal_lib_1.deepEquality)(arrayItem, item))
            continue;
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
function arrayIntersection(arr1, arr2) {
    (0, assertion_lib_1.assertArray)(arr1, 'arr1');
    (0, assertion_lib_1.assertArray)(arr2, 'arr2');
    var intersection = [];
    for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
        var item = arr1_1[_i];
        if (arr2.indexOf(item) !== -1)
            intersection.push(item);
    }
    return intersection;
}
exports.arrayIntersection = arrayIntersection;
/**
 * Finds all deeply common items between two arrays.
 * Deep equality is powered by `@santi100/equal-lib`.
 *
 * @param arr1 The first array from which to generate an intersection with `arr2`.
 * @param arr2 The second array from which to generate an intersection with `arr1`.
 * @returns An array containing all items shared by both arrays.
 */
function deepArrayIntersection(arr1, arr2) {
    (0, assertion_lib_1.assertArray)(arr1, 'arr1');
    (0, assertion_lib_1.assertArray)(arr2, 'arr2');
    var intersection = [];
    for (var _i = 0, arr1_2 = arr1; _i < arr1_2.length; _i++) {
        var item = arr1_2[_i];
        if (__deepIndexOf(arr2, item) !== -1)
            intersection.push(item);
    }
    return intersection;
}
exports.deepArrayIntersection = deepArrayIntersection;
