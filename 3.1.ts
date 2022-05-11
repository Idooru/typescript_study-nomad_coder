type OverLoad = {
  // call signature가 두개 이상 인것을 overload라고 함
  (): void;
  (a: number, b: number): number;
  (a: number, b: string): string;
  (a: number, b: number, c: number): number;
  (a: string, b: string, c: string): string;
  (a: undefined, b: undefined, c: undefined): void;
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
console.log(overload());
