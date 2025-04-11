function filterArray(arr, predicate) {
  const result = [];
  for (const item of arr) {
    if (predicate(item)) {
      result.push(item);
    }
  }
class Vector {
  constructor(components) {
    this.components = components;
  }
  add(other) {
    return new Vector(this.components.map((val, i) => val + other.components[i]));
  }
  sub(other) {
    return new Vector(this.components.map((val, i) => val - other.components[i]));
  }
  dot(other) {
    return this.components.reduce((sum, val, i) => sum + val * other.components[i], 0);
  }
  toString() {
    return `Vector(${this.components.join(", ")})`;
  }
}
  return result;
}
console.log(filterArray([1, 2, 3, 4, 5,6,8], n => n % 2 === 0)); 
