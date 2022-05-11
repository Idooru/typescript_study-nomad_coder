type SuperPrint = <T, M>(a: T[], b: M) => T;

const superPrint: SuperPrint = (arr) => {
  return arr[0];
};

const a = superPrint([1, 2, 3, 4], "Hello");
const b = superPrint([true, true, false], false);
const c = superPrint(["a", "b", "c"], 32);
const d = superPrint([1, 2, true, false, "Hello"], true);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
