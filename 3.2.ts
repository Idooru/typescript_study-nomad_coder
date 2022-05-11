type Generic1 = {
  <T>(arr: T[]): T;
};

const chooseOne: Generic1 = (arr) => {
  const min: number = 0;
  const max: number = arr.length - 1;
  const idx = Math.floor(Math.random() * (max - min + 1));
  return arr[idx];
};

console.log(chooseOne([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(chooseOne([true, "hello", 1, false, "bye", 5]));
