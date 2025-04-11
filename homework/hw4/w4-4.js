function deepMerge(obj1, obj2) {
  const result = { ...obj1 };

  for (const key in obj2) {
    if (
      typeof obj2[key] === 'object' &&
      typeof result[key] === 'object'
    ) {
      result[key] = deepMerge(result[key], obj2[key]);
    } else {
      result[key] = obj2[key];
    }
  }

  return result;
}

const obj1 = { a: 1, b: { x: 2, y: 5,z:6},c:7 };
const obj2 = { b: { y: 5, z: 6 }, c: 7 };

console.log(deepMerge(obj1, obj2));
