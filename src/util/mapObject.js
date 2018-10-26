const isUnset = value => value === undefined || value === null;

export default function mapObject(obj, fn, keepUndefinedValues = false) {
  if (Array.isArray(obj)) {
    const mappedArray = obj.map(fn);
    return keepUndefinedValues ? mappedArray : mappedArray.filter(Boolean);
  }

  return Object.entries(obj).reduce((acc, [key, value]) => {
    const mappedValue = fn(value, key, obj);
    if (isUnset(mappedValue) && !keepUndefinedValues) {
      return acc;
    }
    return Object.assign(acc, { [key]: mappedValue });
  }, {});
}
