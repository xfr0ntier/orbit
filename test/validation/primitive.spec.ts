import * as o from '../../src';

describe('isUndefined', () => {
    it('should return true if the value is undefined', () => {
        const undefinedValue: undefined = undefined;
        expect(o.isUndefined(undefinedValue)).toBe(true);
    });

    it('should return false if the value is null', () => {
        const nullValue: null = null;
        expect(o.isUndefined(nullValue)).toBe(false);
    });

    it('should return false if the value is a defined object', () => {
        const definedObject = { key: 'value' };
        expect(o.isUndefined(definedObject)).toBe(false);
    });

    it('should return false if the value is a string', () => {
        const stringValue = 'Hello, World!';
        expect(o.isUndefined(stringValue)).toBe(false);
    });

    it('should return false if the value is a number', () => {
        const numberValue = 42;
        expect(o.isUndefined(numberValue)).toBe(false);
    });

    it('should return false if the value is a boolean', () => {
        const booleanValue = true;
        expect(o.isUndefined(booleanValue)).toBe(false);
    });

    it('should return false if the value is an empty object', () => {
        const emptyObject = {};
        expect(o.isUndefined(emptyObject)).toBe(false);
    });
});

describe('isFunction', () => {
    it('should return true if the value is a function', () => {
        const functionValue = () => {};
        expect(o.isFunction(functionValue)).toBe(true);
    });

    it('should return false if the value is a string', () => {
        const stringValue = 'Hello, World!';
        expect(o.isFunction(stringValue)).toBe(false);
    });

    it('should return false if the value is a number', () => {
        const numberValue = 42;
        expect(o.isFunction(numberValue)).toBe(false);
    });

    it('should return false if the value is an object', () => {
        const objectValue = { key: 'value' };
        expect(o.isFunction(objectValue)).toBe(false);
    });

    it('should return false if the value is an array', () => {
        const arrayValue = [1, 2, 3];
        expect(o.isFunction(arrayValue)).toBe(false);
    });

    it('should return false if the value is null', () => {
        const nullValue: null = null;
        expect(o.isFunction(nullValue)).toBe(false);
    });

    it('should return false if the value is undefined', () => {
        const undefinedValue: undefined = undefined;
        expect(o.isFunction(undefinedValue)).toBe(false);
    });

    it('should return false if the value is a boolean', () => {
        const booleanValue = true;
        expect(o.isFunction(booleanValue)).toBe(false);
    });

    it('should return false if the value is a symbol', () => {
        const symbolValue = Symbol('symbol');
        expect(o.isFunction(symbolValue)).toBe(false);
    });

    it('should return false if the value is a date', () => {
        const dateValue = new Date();
        expect(o.isFunction(dateValue)).toBe(false);
    });
});

describe('isNull', () => {
    it('should return true if the value is null', () => {
        const nullValue: null = null;
        expect(o.isNull(nullValue)).toBe(true);
    });

    it('should return false if the value is undefined', () => {
        const undefinedValue: undefined = undefined;
        expect(o.isNull(undefinedValue)).toBe(false);
    });

    it('should return false if the value is a string', () => {
        const stringValue = 'Hello, World!';
        expect(o.isNull(stringValue)).toBe(false);
    });

    it('should return false if the value is a number', () => {
        const numberValue = 42;
        expect(o.isNull(numberValue)).toBe(false);
    });

    it('should return false if the value is an object', () => {
        const objectValue = { key: 'value' };
        expect(o.isNull(objectValue)).toBe(false);
    });

    it('should return false if the value is an array', () => {
        const arrayValue = [1, 2, 3];
        expect(o.isNull(arrayValue)).toBe(false);
    });

    it('should return false if the value is a boolean', () => {
        const booleanValue = true;
        expect(o.isNull(booleanValue)).toBe(false);
    });

    it('should return false if the value is a function', () => {
        const functionValue = () => {};
        expect(o.isNull(functionValue)).toBe(false);
    });

    it('should return false if the value is a symbol', () => {
        const symbolValue = Symbol('symbol');
        expect(o.isNull(symbolValue)).toBe(false);
    });

    it('should return false if the value is a date', () => {
        const dateValue = new Date();
        expect(o.isNull(dateValue)).toBe(false);
    });
});

describe('isString', () => {
    it('should return true if the value is a string', () => {
        const stringValue = 'Hello, World!';
        expect(o.isString(stringValue)).toBe(true);
    });

    it('should return false if the value is a number', () => {
        const numberValue = 42;
        expect(o.isString(numberValue)).toBe(false);
    });

    it('should return false if the value is an object', () => {
        const objectValue = { key: 'value' };
        expect(o.isString(objectValue)).toBe(false);
    });

    it('should return false if the value is an array', () => {
        const arrayValue = [1, 2, 3];
        expect(o.isString(arrayValue)).toBe(false);
    });

    it('should return false if the value is null', () => {
        const nullValue: null = null;
        expect(o.isString(nullValue)).toBe(false);
    });

    it('should return false if the value is undefined', () => {
        const undefinedValue: undefined = undefined;
        expect(o.isString(undefinedValue)).toBe(false);
    });

    it('should return false if the value is a boolean', () => {
        const booleanValue = true;
        expect(o.isString(booleanValue)).toBe(false);
    });

    it('should return false if the value is a function', () => {
        const functionValue = () => {};
        expect(o.isString(functionValue)).toBe(false);
    });

    it('should return false if the value is a symbol', () => {
        const symbolValue = Symbol('symbol');
        expect(o.isString(symbolValue)).toBe(false);
    });

    it('should return false if the value is a date', () => {
        const dateValue = new Date();
        expect(o.isString(dateValue)).toBe(false);
    });
});

describe('isNan', () => {
    it('should return true if the value is NaN', () => {
        const nanValue = NaN;
        expect(o.isNan(nanValue)).toBe(true);
    });

    it('should return false if the value is a number', () => {
        const numberValue = 42;
        expect(o.isNan(numberValue)).toBe(false);
    });

    it('should return false if the value is an object', () => {
        const objectValue = { key: 'value' };
        expect(o.isNan(objectValue)).toBe(false);
    });

    it('should return false if the value is a string', () => {
        const stringValue = 'Hello, World!';
        expect(o.isNan(stringValue)).toBe(false);
    });

    it('should return false if the value is null', () => {
        const nullValue: null = null;
        expect(o.isNan(nullValue)).toBe(false);
    });

    it('should return false if the value is undefined', () => {
        const undefinedValue: undefined = undefined;
        expect(o.isNan(undefinedValue)).toBe(false);
    });

    it('should return false if the value is a boolean', () => {
        const booleanValue = true;
        expect(o.isNan(booleanValue)).toBe(false);
    });

    it('should return false if the value is a function', () => {
        const functionValue = () => {};
        expect(o.isNan(functionValue)).toBe(false);
    });

    it('should return false if the value is a symbol', () => {
        const symbolValue = Symbol('symbol');
        expect(o.isNan(symbolValue)).toBe(false);
    });

    it('should return false if the value is a date', () => {
        const dateValue = new Date();
        expect(o.isNan(dateValue)).toBe(false);
    });
});

describe('isNumber', () => {
    it('should return true if the value is a number', () => {
        const numberValue = 42;
        expect(o.isNumber(numberValue)).toBe(true);
    });

    it('should return true if the value is a numeric string', () => {
        const numericStringValue = '123';
        expect(o.isNumber(numericStringValue)).toBe(true);
    });

    it('should return false if the value is NaN', () => {
        const nanValue = NaN;
        expect(o.isNumber(nanValue)).toBe(false);
    });

    it('should return false if the value is an object', () => {
        const objectValue = { key: 'value' };
        expect(o.isNumber(objectValue)).toBe(false);
    });

    it('should return false if the value is a string', () => {
        const stringValue = 'Hello, World!';
        expect(o.isNumber(stringValue)).toBe(false);
    });

    it('should return false if the value is null', () => {
        const nullValue: null = null;
        expect(o.isNumber(nullValue)).toBe(false);
    });

    it('should return false if the value is undefined', () => {
        const undefinedValue: undefined = undefined;
        expect(o.isNumber(undefinedValue)).toBe(false);
    });

    it('should return false if the value is a boolean', () => {
        const booleanValue = true;
        expect(o.isNumber(booleanValue)).toBe(false);
    });

    it('should return false if the value is a function', () => {
        const functionValue = () => {};
        expect(o.isNumber(functionValue)).toBe(false);
    });

    it('should return false if the value is a symbol', () => {
        const symbolValue = Symbol('symbol');
        expect(o.isNumber(symbolValue)).toBe(false);
    });

    it('should return false if the value is a date', () => {
        const dateValue = new Date();
        expect(o.isNumber(dateValue)).toBe(false);
    });
});

describe('isInt', () => {
    it('should return true if the value is an integer number', () => {
        expect(o.isInt(42)).toBe(true);
    });

    it('should return true if the value is a numeric string representing an integer', () => {
        expect(o.isInt('42')).toBe(true);
    });

    it('should return false if the value is a floating-point number', () => {
        expect(o.isInt(3.14)).toBe(false);
    });

    it('should return false if the value is NaN', () => {
        expect(o.isInt(NaN)).toBe(false);
    });

    it('should return false if the value is null', () => {
        expect(o.isInt(null)).toBe(false);
    });

    it('should return false if the value is undefined', () => {
        expect(o.isInt(undefined)).toBe(false);
    });

    it('should return false if the value is a string', () => {
        expect(o.isInt('Hello')).toBe(false);
    });

    it('should return false if the value is an object', () => {
        expect(o.isInt({ key: 'value' })).toBe(false);
    });

    it('should return false if the value is an array', () => {
        expect(o.isInt([1, 2, 3])).toBe(false);
    });

    it('should return false if the value is a boolean', () => {
        expect(o.isInt(true)).toBe(false);
    });
});

describe('isFloat', () => {
    it('should return true if the value is a floating-point number', () => {
        expect(o.isFloat(3.14)).toBe(true);
    });

    it('should return true if the value is a numeric string representing a floating-point number', () => {
        expect(o.isFloat('3.14')).toBe(true);
    });

    it('should return false if the value is an integer number', () => {
        expect(o.isFloat(42)).toBe(false);
    });

    it('should return false if the value is NaN', () => {
        expect(o.isFloat(NaN)).toBe(false);
    });

    it('should return false if the value is null', () => {
        expect(o.isFloat(null)).toBe(false);
    });

    it('should return false if the value is undefined', () => {
        expect(o.isFloat(undefined)).toBe(false);
    });

    it('should return false if the value is a string', () => {
        expect(o.isFloat('Hello')).toBe(false);
    });

    it('should return false if the value is an object', () => {
        expect(o.isFloat({ key: 'value' })).toBe(false);
    });

    it('should return false if the value is an array', () => {
        expect(o.isFloat([1, 2, 3])).toBe(false);
    });

    it('should return false if the value is a boolean', () => {
        expect(o.isFloat(true)).toBe(false);
    });
});
