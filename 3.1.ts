type OverLoad = {
  (a: number, b: number): number;
  (a: number, b: string): string;
  (a: number, b: number, c: number): number;
  (a: string, b: string, c: string): string;
};

const overload: OverLoad = (a?: any, b?: any, c?: any) => {
  if (c) return a + b + c;
  else if (!a && !b && !c) return "no params";
  return a + b;
};

console.log(overload(1, 2));
console.log(overload(1, "a"));
console.log(overload(1, 2, 3));
console.log(overload("a", "b", "c"));
