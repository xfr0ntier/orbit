import { isEmptyObject, isObject } from '../../src';

describe('isObject', () => {
    it('should return true for an object', () => {
        const obj = { key: 'value' };
        expect(isObject(obj)).toBe(true);
    });

    it('should return false for an array', () => {
        const array: unknown[] = [1, 2, 3];
        expect(isObject(array)).toBe(false);
    });

    it('should return false for a primitive value', () => {
        const stringValue = 'hello';
        const numberValue = 42;

        expect(isObject(stringValue)).toBe(false);
        expect(isObject(numberValue)).toBe(false);
    });

    it('should return false for null and undefined', () => {
        expect(isObject(null)).toBe(false);
        expect(isObject(undefined)).toBe(false);
    });
});

describe('isEmptyObject', () => {
    it('should return true for an empty object', () => {
        const emptyObject = {};
        expect(isEmptyObject(emptyObject)).toBe(true);
    });

    it('should return false for an object with properties', () => {
        const nonEmptyObject = { key: 'value' };
        expect(isEmptyObject(nonEmptyObject)).toBe(false);
    });

    it('should return false for null and undefined', () => {
        expect(isEmptyObject(null)).toBe(false);
        expect(isEmptyObject(undefined)).toBe(false);
    });
});
