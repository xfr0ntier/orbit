export function omit(obj: object, props: string[]) {
  for (const prop of props) {
    Reflect.deleteProperty(obj, prop);
  }

  return obj;
};
