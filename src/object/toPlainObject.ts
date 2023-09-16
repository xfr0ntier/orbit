import { Primitive } from 'src/internal/types';
import { isArray, isObject } from '..';

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
 * Converts any object to an anonymous object, flattening any inherited properties.
 *
 * @since 0.0.1
 * @param value The value to convert
 * @returns
 */
export function toPlainObject(obj: Record<Primitive, any>) {
    const keys = Object.keys(obj ?? {});

    return keys.reduce(function (
        object: Record<Primitive, unknown>,
        key: string
    ) {
        const [value, isObj, isArr] = [
            obj[key],
            isObject(obj[key]),
            isArray(obj[key]),
        ];

        if (isArr) {
            object[key] = value.map((item: any) => {
                if (isObject(item)) {
                    return toPlainObject(item);
                } else {
                    return item;
                }
            });
        } else if (isObj) {
            object[key] = toPlainObject(value);
        } else {
            object[key] = value;
        }

        return object;
    },
    {});
}
