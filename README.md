# Santi's Array Intersection Library

[![Build Status][workflow badge]][repo actions]
[![npm homepage][npm badge]][npm home]
[![GitHub stars][stars badge]][repo url]
[![License][license badge]][repo url]
[![Bundlephobia stats][bundlephobia badge]][bundlephobia url]

[workflow badge]: https://github.com/santi100a/array-intersection/actions/workflows/main.yml/badge.svg
[npm badge]: https://img.shields.io/npm/v/@santi100/array-intersection
[stars badge]: https://img.shields.io/github/stars/santi100a/array-intersection.svg
[license badge]: https://img.shields.io/github/license/santi100a/array-intersection.svg
[bundlephobia badge]: https://img.shields.io/bundlephobia/min/@santi100/array-intersection

[npm home]: https://npmjs.org/package/@santi100/array-intersection
[repo actions]: https://github.com/santi100a/array-intersection/actions
[repo url]: https://github.com/santi100a/array-intersection
[bundlephobia url]: https://bundlephobia.com/package/@santi100/array-intersection@latest

- 🚀 Lightweight and fast[^](#disclaimers)
- 👴 ES3-compliant[*](#disclaimers)
- 💻 Portable between the browser and Node.js

## What's this?

This is a fast, lightweight library for doing intersection of arrays, a common
requirement in things like:

1. Data Analysis: When working with datasets, finding the intersection of arrays can help identify common elements or patterns across different datasets. For example, you might want to determine the common set of customers who appear in both sales and marketing databases.

2. Database Queries: In database management systems, intersection operations can be used to retrieve records that satisfy multiple conditions. For instance, you can find the intersection of results from different database queries to obtain a combined set of matching records.

3. Social Networks: In social network analysis, the intersection of arrays can be employed to discover mutual connections or shared interests between individuals. It can assist in identifying common friends, followers, or communities within a social network.

4. Set Operations: The intersection of arrays is a fundamental operation in set theory. It helps define relationships between different sets and allows for operations like finding common elements, calculating overlaps, or determining shared characteristics.

5. Collaborative Filtering: In recommendation systems, the intersection of arrays can be used to find similar items or preferences among users. By identifying shared interests or overlapping preferences, collaborative filtering algorithms can provide personalized recommendations based on the intersection of users' preferences.

6. Genetic Research: In genetics, the intersection of genetic profiles or DNA sequences can be employed to identify shared genetic markers or regions among individuals or populations. This information can be useful in studying genetic traits, inheritance patterns, or evolutionary relationships.

These are just a few examples!

## Installation

- Via NPM: `npm install @santi100/array-intersection`
- Via Yarn: `yarn add @santi100/array-intersection`
- Via PNPM: `pnpm install @santi100/array-intersection`

## API

- `function arrayIntersection<T = unknown>(arr1: T[], arr2: T[]): T[];`
  Finds all common items between two arrays.
   | Name       |     Type    |                            Description                              | Optional? | Default |
   |------------|-------------|---------------------------------------------------------------------|-----------|---------|
   |  `arr1`    |    `T[]`    | The first array from which to generate an intersection with `arr2`. | No        |  *N/A*  |
   |  `arr2`    |    `T[]`    | The first array from which to generate an intersection with `arr1`. | No        |  *N/A*  |

   Returns an array containing all items shared by both arrays.

- `function deepArrayIntersection<T = unknown>(arr1: T[], arr2: T[]): T[];`
  Finds all deeply common items between two arrays.
  Deep equality is powered by `@santi100/equal-lib`.

   | Name       |     Type    |                            Description                              | Optional? | Default |
   |------------|-------------|---------------------------------------------------------------------|-----------|---------|
   |  `arr1`    |    `T[]`    | The first array from which to generate an intersection with `arr2`. | No        |  *N/A*  |
   |  `arr2`    |    `T[]`    | The first array from which to generate an intersection with `arr1`. | No        |  *N/A*  |

   Returns an array containing all items shared by both arrays.

## Usage

```typescript

import { arrayIntersection, deepArrayIntersection } from '@santi100/array-intersection'; // ESM
const { arrayIntersection, deepArrayIntersection } = require('@santi100/array-intersection'); // CJS

// Usage of arrayIntersection

const array1 = ['Alice', 'Bob', 'Charles'];
const array2 = ['Dan', 'Ethan', 'Bob', 'Alice'];

const intersection = arrayIntersection(array1, array2); // => ['Alice', 'Bob']

// Usage of deepArrayIntersection

const array3 = [{ foo: 1 }, { bar: 2 }, { baz: 3 }];
const array4 = [{ bar: 2 }, { baz: 3 }, { qux: 4 }];

const objectIntersection = deepArrayIntersection(array3, array4); // => [{ bar: 2 }, { baz: 3 }]
```

## Contribute

Wanna contribute? [File an issue](issues) or [pull request](pulls)!
Look at [the contribution instructions](CONTRIBUTING.md)
and make sure you follow the [contribution Code of Conduct](CODE_OF_CONDUCT.md).

## Disclaimers

**Hasn't been tested in an actual ES3 environment. Feel free to open an issue or pull request if you find any non-ES3 thing. See "Contribute" for instructions on how to do so.*

*^The source code is just a few kilobytes in size.*
