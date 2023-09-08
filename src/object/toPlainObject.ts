import { isArray, isFunction, isObject } from '..';

/**
 * Converts any `value` to anonymous object that contains only data properties,
 * flattening any inherited data properties.
 *
 * @since 0.0.1
 * @param value The value to convert
 * @returns
 */
export function toPlainDataObject<T extends object>(value: T) {
    return JSON.parse(JSON.stringify(value));
}

/**
 * Converts any object to anonymous object, flattening any inherited properties.
 *
 * @since 0.0.1
 * @param value The value to convert
 * @returns
 */
export function toPlainObject(value: Record<string, any>) {
    function getKeys(obj: Record<string, unknown>) {
        const keys = Object.getOwnPropertyNames(obj);

        if (Object.prototype.toString.call(obj.__proto__) != '[object Object]')
            keys.push(...Object.getOwnPropertyNames(obj?.__proto__));

        const keysToBypass = ['constructor'];

        return keys.filter((prop) => !keysToBypass.includes(prop));
    }

    function _toPlainObject(_obj: Record<string, any>) {
        const keys = getKeys(_obj ?? {});

        return keys.reduce(function (
            object: Record<string, unknown>,
            key: string
        ) {
            const [value, isObj, isArr] = [
                _obj[key],
                isObject(_obj[key]),
                isArray(_obj[key]),
            ];

            if (isArr) object[key] = value.map(_toPlainObject);
            else if (isObj) object[key] = _toPlainObject(value);
            else object[key] = value;

            return object;
        },
        {});
    }

    return _toPlainObject(value);
}
