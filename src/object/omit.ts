export function omit<T extends object>(obj: T, props: (keyof T)[]) {
    const validProps: (keyof T)[] = [];

    for (const prop of props) {
        if (prop in obj) validProps.push(prop);
    }

    if (validProps.length == 0) return obj;

    const _obj = structuredClone(obj);

    for (const prop of validProps) {
        Reflect.deleteProperty(_obj, prop);
    }

    return _obj;
}
