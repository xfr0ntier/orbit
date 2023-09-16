import { entries, keys, values } from '../../src/object/object-utils';

describe('keys', () => {
    it('should return an array of keys for a simple object', () => {
        const inputObject = { key1: 'value1', key2: 'value2', key3: 'value3' };
        const result = keys(inputObject);
        expect(result).toEqual(['key1', 'key2', 'key3']);
    });

    it('should return an empty array for an empty object', () => {
        const inputObject = {};
        const result = keys(inputObject);
        expect(result).toEqual([]);
    });

    it('should return an array of keys for an object with nested objects', () => {
        const inputObject = {
            key1: 'value1',
            nestedObject: { key2: 'value2', key3: 'value3' },
            key4: 'value4',
        };
        const result = keys(inputObject);
        expect(result).toEqual(['key1', 'nestedObject', 'key4']);
    });

    it('should return an array of keys for an object with null values', () => {
        const inputObject = { key1: null, key2: null, key3: null };
        const result = keys(inputObject);
        expect(result).toEqual(['key1', 'key2', 'key3']);
    });

    it('should return an array of keys for an object with undefined values', () => {
        const inputObject = {
            key1: undefined,
            key2: undefined,
            key3: undefined,
        };
        const result = keys(inputObject);
        expect(result).toEqual(['key1', 'key2', 'key3']);
    });

    it('should return an array of keys for an object with mixed types of values', () => {
        const inputObject = { key1: 'value1', key2: 42, key3: true };
        const result = keys(inputObject);
        expect(result).toEqual(['key1', 'key2', 'key3']);
    });
});

describe('values', () => {
    it('should return an array of values for a simple object', () => {
        const inputObject = { key1: 'value1', key2: 'value2', key3: 'value3' };
        const result = values(inputObject);
        expect(result).toEqual(['value1', 'value2', 'value3']);
    });

    it('should return an empty array for an empty object', () => {
        const inputObject = {};
        const result = values(inputObject);
        expect(result).toEqual([]);
    });

    it('should return an array of values for an object with nested objects', () => {
        const inputObject = {
            key1: 'value1',
            nestedObject: { key2: 'value2', key3: 'value3' },
            key4: 'value4',
        };
        const result = values(inputObject);
        expect(result).toEqual([
            'value1',
            { key2: 'value2', key3: 'value3' },
            'value4',
        ]);
    });

    it('should return an array of values for an object with null values', () => {
        const inputObject = { key1: null, key2: null, key3: null };
        const result = values(inputObject);
        expect(result).toEqual([null, null, null]);
    });

    it('should return an array of values for an object with undefined values', () => {
        const inputObject = {
            key1: undefined,
            key2: undefined,
            key3: undefined,
        };
        const result = values(inputObject);
        expect(result).toEqual([undefined, undefined, undefined]);
    });

    it('should return an array of values for an object with mixed types of values', () => {
        const inputObject = { key1: 'value1', key2: 42, key3: true };
        const result = values(inputObject);
        expect(result).toEqual(['value1', 42, true]);
    });
});

describe('entries', () => {
    it('should return an array of entries for a simple object', () => {
        const inputObject = { key1: 'value1', key2: 'value2', key3: 'value3' };
        const result = entries(inputObject);
        expect(result).toEqual([
            ['key1', 'value1'],
            ['key2', 'value2'],
            ['key3', 'value3'],
        ]);
    });

    it('should return an empty array for an empty object', () => {
        const inputObject = {};
        const result = entries(inputObject);
        expect(result).toEqual([]);
    });

    it('should return an array of entries for an object with nested objects', () => {
        const inputObject = {
            key1: 'value1',
            nestedObject: { key2: 'value2', key3: 'value3' },
            key4: 'value4',
        };
        const result = entries(inputObject);
        expect(result).toEqual([
            ['key1', 'value1'],
            ['nestedObject', { key2: 'value2', key3: 'value3' }],
            ['key4', 'value4'],
        ]);
    });

    it('should return an array of entries for an object with null values', () => {
        const inputObject = { key1: null, key2: null, key3: null };
        const result = entries(inputObject);
        expect(result).toEqual([
            ['key1', null],
            ['key2', null],
            ['key3', null],
        ]);
    });

    it('should return an array of entries for an object with undefined values', () => {
        const inputObject = {
            key1: undefined,
            key2: undefined,
            key3: undefined,
        };
        const result = entries(inputObject);
        expect(result).toEqual([
            ['key1', undefined],
            ['key2', undefined],
            ['key3', undefined],
        ]);
    });

    it('should return an array of entries for an object with mixed types of values', () => {
        const inputObject = { key1: 'value1', key2: 42, key3: true };
        const result = entries(inputObject);
        expect(result).toEqual([
            ['key1', 'value1'],
            ['key2', 42],
            ['key3', true],
        ]);
    });
});
