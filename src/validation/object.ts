export function isObject(obj: unknown) {
    return !Array.isArray(obj) && obj instanceof Object;
}

export function isEmptyObject(obj: unknown) {
    if (obj == null) return false;
    return Object.keys(obj).length == 0;
}
