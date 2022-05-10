type Add = (a: number, b: number) => number; // call signature 화살표 함수 혹은 함수 표현식에서 사용가능 함수 선언식은 사용불가
const add: Add = (a, b) => a + b;

console.log(add(5, 6));

type Min = (a: number, b: number) => string;
const min: Min = function (a, b) {
  return `${a} - ${b} = ${a - b}`;
};

console.log(min(3, 2));

type Mul = {
  (a: number, b: number): boolean;
};
const mul: Mul = (a, b) => (a * b ? true : false);

console.log(mul(1, 0));
