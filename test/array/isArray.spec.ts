import { isArray } from '../../src';

describe('isArray', () => {
    it('should return true for an array', () => {
        const inputArray: any[] = [1, 2, 3];
        expect(isArray(inputArray)).toBe(true);
    });

    it('should return false for a non-array', () => {
        const inputObject: any = { key: 'value' };
        const inputString: any = 'hello';
        const inputNumber: any = 42;

        expect(isArray(inputObject)).toBe(false);
        expect(isArray(inputString)).toBe(false);
        expect(isArray(inputNumber)).toBe(false);
    });

    it('should return true for an empty array', () => {
        const emptyArray: any[] = [];
        expect(isArray(emptyArray)).toBe(true);
    });
});