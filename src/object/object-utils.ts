import { Primitive } from 'src/internal/types';

/**
 * Get keys of the given `obj`
 *
 * @since 0.0.2
 * @param obj The object to get its keys
 * @returns
 */
export function keys<T extends Record<Primitive, unknown>>(obj: T) {
    return Object.keys(obj);
}

/**
 * Get values of the given `obj`
 *
 * @since 0.0.2
 * @param obj The object to get its values
 * @returns
 */
export function values<T extends Record<Primitive, unknown>>(obj: T) {
    return Object.values(obj);
}

/**
 * Get entires of the given `obj`
 *
 * @since 0.0.2
 * @param obj The object to get its values
 * @returns
 */
export function entries<T extends Record<Primitive, unknown>>(obj: T) {
    return Object.entries(obj);
}
