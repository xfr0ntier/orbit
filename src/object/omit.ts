export function omit(obj: object, props: string[]) {
  const _obj = structuredClone(obj);

  for (const prop of props) {
    Reflect.deleteProperty(_obj, prop);
  }

  return _obj;
};
