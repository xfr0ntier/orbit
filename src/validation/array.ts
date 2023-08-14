export function isArray(arr: unknown) {
    return Array.isArray(arr);
}

export function isEmptyArray(arr: unknown) {
    return Array.isArray(arr) && arr.length == 0;
}
