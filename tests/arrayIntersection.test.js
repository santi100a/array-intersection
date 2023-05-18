describe('array-intersection', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { arrayIntersection } = require('..');

    test('it detects the intersection of two arrays of numbers', () => {
        const nums1 = [1, 2, 3, 4, 5, 6, 7];
        const nums2 = [7, 2, 5, 4, 8, 12];

        const strings1 = ['foo', 'bar', 'baz', 'qux'];
        const strings2 = ['foo', 'hello', 'bar'];

        const booleans1 = [true, true, false];
        const booleans2 = [false, true];

        expect(arrayIntersection(nums1, nums2)).toEqual([2, 4, 5, 7]);
        expect(arrayIntersection(strings1, strings2)).toEqual(['foo', 'bar']);
        expect(arrayIntersection(booleans1, booleans2)).toEqual([true, true, false]);
    });
    test('it detects the intersection of two arrays without shared items', () => {
        const nums1 = [1, 2, 3, 4, 5, 6, 7];
        const nums2 = [8, 9, 10, 11, 12];

        expect(arrayIntersection(nums1, nums2)).toEqual([]);
    });
    test('it detects the intersection of two exactly equal arrays', () => {
        const nums1 = [1, 2, 3, 4, 5, 6, 7];
        const nums2 = [1, 2, 3, 4, 5, 6, 7];

        expect(arrayIntersection(nums1, nums2)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
    test('error handling', () => {
        expect(() => arrayIntersection(1, [])).toThrow(TypeError);
        expect(() => arrayIntersection('not an array', [])).toThrow(TypeError);
        expect(() => arrayIntersection(true, [])).toThrow(TypeError);

        expect(() => arrayIntersection(1, {})).toThrow(TypeError);
        expect(() => arrayIntersection('not an array', {})).toThrow(TypeError);
        expect(() => arrayIntersection(true, {})).toThrow(TypeError);

        expect(() => arrayIntersection([], 1)).toThrow(TypeError);
        expect(() => arrayIntersection([], 'not an array')).toThrow(TypeError);
        expect(() => arrayIntersection([], true)).toThrow(TypeError);

        expect(() => arrayIntersection({}, 1)).toThrow(TypeError);
        expect(() => arrayIntersection({}, 'not an array')).toThrow(TypeError);
        expect(() => arrayIntersection({}, true)).toThrow(TypeError);
    });
});