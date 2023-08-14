import { isArray, isEmptyArray } from '../../src';

describe('isArray', () => {
    it('should return true for an array', () => {
        const inputArray: unknown[] = [1, 2, 3];
        expect(isArray(inputArray)).toBe(true);
    });

    it('should return false for a non-array', () => {
        const inputObject: unknown = { key: 'value' };
        const inputString: unknown = 'hello';
        const inputNumber: unknown = 42;

        expect(isArray(inputObject)).toBe(false);
        expect(isArray(inputString)).toBe(false);
        expect(isArray(inputNumber)).toBe(false);
    });

    it('should return true for an empty array', () => {
        const emptyArray: unknown[] = [];
        expect(isArray(emptyArray)).toBe(true);
    });
});

describe('isEmptyArray', () => {
    it('should return true for an empty array', () => {
        const emptyArray: unknown[] = [];
        expect(isEmptyArray(emptyArray)).toBe(true);
    });

    it('should return false for a non-array', () => {
        const nonArray = 'hello';
        const numberValue = 42;
        const objectValue = { key: 'value' };

        expect(isEmptyArray(nonArray)).toBe(false);
        expect(isEmptyArray(numberValue)).toBe(false);
        expect(isEmptyArray(objectValue)).toBe(false);
    });

    it('should return false for an array with elements', () => {
        const nonEmptyArray: unknown[] = [1, 2, 3];
        expect(isEmptyArray(nonEmptyArray)).toBe(false);
    });

    it('should return false for undefined and null', () => {
        expect(isEmptyArray(undefined)).toBe(false);
        expect(isEmptyArray(null)).toBe(false);
    });
});
