import { DeepKeys } from 'src/internal/types';

export function deepOmit<T extends Record<any, any>>(
    obj: T,
    props: DeepKeys<T>[]
) {
    const _obj = structuredClone(obj);

    for (const prop of props) {
        const keyChain = prop.split('.');
        let currentObj = _obj;
        // Traverse the object to the nested property
        for (let i = 0; i < keyChain.length - 1; i++) {
            const key = keyChain[i];
            if (!currentObj.hasOwnProperty(key)) {
                // Property doesn't exist, break or handle
                break;
            }
            currentObj = currentObj[key];
        }

        const lastKey = keyChain[keyChain.length - 1];

        if (currentObj.hasOwnProperty(lastKey)) {
            Reflect.deleteProperty(currentObj, lastKey);
        }
        Reflect.deleteProperty(_obj, prop);
    }

    return _obj;
}
