describe('array-intersection deepArrayIntersection', () => {
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const { deepArrayIntersection } = require('..');


    
	test('it detects the intersection of two arrays of objects', () => {
		const objects1 = [{ foo: 5 }, { bar: 7 }, { baz: 9 }];
		const objects2 = [{ foo: 5 }, { bar: 12 }, { baz: 9 }];

		expect(deepArrayIntersection(objects1, objects2)).toEqual([
			{ foo: 5 },
			{ baz: 9 },
		]);
	});
	test('it detects the intersection of two arrays without shared items', () => {

		const objects1 = [{ foo: 5 }, { bar: 7 }, { baz: 9 }];
		const objects2 = [{ foo: 37 }, { bar: 12 }, { baz: 17 }];

		expect(deepArrayIntersection(objects1, objects2)).toEqual([]);
	});
	test('it detects the intersection of two exactly equal arrays', () => {

		const objects1 = [{ foo: 5 }, { bar: 7 }, { baz: 9 }];
		const objects2 = [{ foo: 5 }, { bar: 7 }, { baz: 9 }];


		expect(deepArrayIntersection(objects1, objects2)).toEqual([{ foo: 5 }, { bar: 7 }, { baz: 9 }]);
	});
	test('error handling', () => {
		expect(() => deepArrayIntersection(1, [])).toThrow(TypeError);
		expect(() => deepArrayIntersection('not an array', [])).toThrow(TypeError);
		expect(() => deepArrayIntersection(true, [])).toThrow(TypeError);

		expect(() => deepArrayIntersection(1, {})).toThrow(TypeError);
		expect(() => deepArrayIntersection('not an array', {})).toThrow(TypeError);
		expect(() => deepArrayIntersection(true, {})).toThrow(TypeError);

		expect(() => deepArrayIntersection([], 1)).toThrow(TypeError);
		expect(() => deepArrayIntersection([], 'not an array')).toThrow(TypeError);
		expect(() => deepArrayIntersection([], true)).toThrow(TypeError);

		expect(() => deepArrayIntersection({}, 1)).toThrow(TypeError);
		expect(() => deepArrayIntersection({}, 'not an array')).toThrow(TypeError);
		expect(() => deepArrayIntersection({}, true)).toThrow(TypeError);
	});
});
