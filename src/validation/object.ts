import { isArray } from './array';
import { isFunction } from './primitive';

/**
 * Checks if the 'value' is an object that is not array neither function
 *
 * @since 0.0.1
 * @param value The value to check
 * @returns
 */
export function isObject(value: unknown) {
    return !isArray(value) && !isFunction(value) && value instanceof Object;
}

/**
 * Checks if the 'value' is an empty object
 *
 * @since 0.0.1
 * @param value The value to check
 * @returns
 */
export function isEmptyObject(value: unknown) {
    if (value == null) return false;
    return Object.keys(value).length == 0;
}
