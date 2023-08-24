export function isUndefined(value: unknown) {
    return typeof value === 'undefined';
}

export function isFunction(value: unknown) {
    return typeof value === 'function';
}

export function isNull(value: unknown) {
    return value === null;
}

export function isString(str: unknown) {
    return typeof str === 'string';
}

export function isNan(num: unknown) {
    return Number.isNaN(num);
}

export function isNumber(num: unknown) {
    let coalced = coalceNumber(num);
    return typeof coalced === 'number' && !isNan(coalced);
}

export function isInt(num: unknown) {
    let coalced = coalceNumber(num);
    return isNumber(coalced) && Number.isInteger(coalced);
}

export function isFloat(num: unknown) {
    let coalced = coalceNumber(num);
    return isNumber(coalced) && !isInt(coalced);
}

function coalceNumber(num: unknown) {
    if (isString(num)) return Number(num);
    return num;
}
