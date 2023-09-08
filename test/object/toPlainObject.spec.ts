import { toPlainDataObject, toPlainObject } from '../../src';

describe('toPlainDataObject', () => {
    it('should return a plain data object for a simple object', () => {
        const inputObject = { key: 'value', num: 42 };
        const result = toPlainDataObject(inputObject);
        expect(result).toEqual(inputObject);
    });

    it('should return a plain data object for an object with nested objects', () => {
        const inputObject = {
            name: 'John',
            address: {
                street: '123 Main St',
                city: 'Exampleville',
            },
        };
        const result = toPlainDataObject(inputObject);
        expect(result).toEqual(inputObject);
    });

    it('should return a plain data object for an object with arrays', () => {
        const inputObject = {
            fruits: ['apple', 'banana', 'cherry'],
        };
        const result = toPlainDataObject(inputObject);
        expect(result).toEqual(inputObject);
    });

    it('should return a plain data object for an object with functions', () => {
        const inputObject = {
            calculate: () => 42,
        };
        const result = toPlainDataObject(inputObject);
        expect(result).toEqual({});
    });

    it('should return a plain data object for an empty object', () => {
        const inputObject = {};
        const result = toPlainDataObject(inputObject);
        expect(result).toEqual(inputObject);
    });

    it('should return a plain data object for an object with null values', () => {
        const inputObject = {
            name: null,
            age: null,
        };
        const result = toPlainDataObject(inputObject);
        expect(result).toEqual(inputObject);
    });

    it('should return a plain data object for an object with undefined values', () => {
        const inputObject = {
            name: undefined,
            age: undefined,
        };
        const result = toPlainDataObject(inputObject);
        expect(result).toEqual(inputObject);
    });
});

describe('toPlainObject', () => {
    it('should return a plain object for a simple object', () => {
        const inputObject = { key: 'value', num: 42 };
        const result = toPlainObject(inputObject);

        expect(result).toEqual(inputObject);
    });

    it('should return a plain object for an object with nested objects', () => {
        const inputObject = {
            name: 'John',
            address: {
                street: '123 Main St',
                city: 'Exampleville',
            },
        };
        const result = toPlainObject(inputObject);
        expect(result).toEqual(inputObject);
    });

    it('should return a plain object for an object with arrays', () => {
        const inputObject = {
            fruits: ['apple', 'banana', 'cherry', 0, 1, 2],
        };

        // TODO fix this case which aggregate array Object elements
        // ref: https://stackoverflow.com/questions/34699529/convert-javascript-class-instance-to-plain-object-preserving-methods
        console.log(Array.isArray(inputObject.fruits));

        const result = toPlainObject(inputObject);
        expect(result).toEqual(inputObject);
    });

    it('should return a plain object for an object with functions', () => {
        const inputObject = {
            calculate: () => 42,
        };
        const result = toPlainObject(inputObject);
        expect(result).toEqual(inputObject);
    });

    it('should return a plain object for an empty object', () => {
        const inputObject = {};
        const result = toPlainObject(inputObject);
        expect(result).toEqual(inputObject);
    });

    it('should return a plain object for an object with null values', () => {
        const inputObject = {
            name: null,
            age: null,
        };
        const result = toPlainObject(inputObject);
        expect(result).toEqual(inputObject);
    });

    it('should return a plain object for an object with undefined values', () => {
        const inputObject = {
            name: undefined,
            age: undefined,
        };
        const result = toPlainObject(inputObject);
        expect(result).toEqual(inputObject);
    });
});
