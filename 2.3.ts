type dog = {
  // alias
  name: string;
  description?: string;
  readonly isNeutering: boolean;
};

type list = [string, number, boolean]; // tuple

const myPet: dog = {
  name: "mong",
  description: "I love mong",
  isNeutering: true,
};

// myPet.isNeutering = false; // readonly 키워드가 alias에 적용되었기 때문에 변경 불가능
// console.log(myPet);

// const arr1: list = ["ㄱㄴㄷ", 126, false];
// const arr2: readonly [string, number, boolean] = ["abc", 123, true];
// const arr3: [string, number?, boolean] = ["asd", false]; // 튜플 형식에서 ?불가능
// arr[0] = "def";

// console.log(arr1);
// console.log(arr2);

type crazy = [undefined, null, any];
const list: crazy = [undefined, null, 2 + "a"];

console.log(list);
