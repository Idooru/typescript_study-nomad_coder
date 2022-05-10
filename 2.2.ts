type Name = string;
type Age = number;
type Sex = string[];
type IsMarry = boolean;
type Description = string;

type Profile = {
  name: Name;
  age: Age;
  sex: Sex;
  isMarry: IsMarry;
  description?: Description;
};

const person1: Profile = {
  name: "Idooru",
  age: 25,
  sex: ["male"],
  isMarry: false,
};

const person2: Profile = {
  name: "shere",
  age: 25,
  sex: ["male"],
  isMarry: false,
  description: "Idooru's clone",
};

const person3: Profile = {
  name: "Serha",
  age: 45,
  sex: ["female"],
  isMarry: true,
  description: "she was my english teacher",
};

const people: Profile[] = [person1, person2, person3]; // 배열의 인덱스는 같은 Profile Alias를 갖으므로 Profile[]타입을 갖는 people 생성
const male = people.filter((idx) => idx.sex[0] === "male");
// console.log(male);

function playerMaker(
  name: string,
  age: number,
  sex: string[],
  isMarry: boolean,
  description?: string
): void {
  // 생성자 함수로써 사용, 리턴값의 타입을 void로 설정해야 new 키워드를 붙일 수 있음
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.isMarry = isMarry;
  this.description = description;
}

const player1 = new playerMaker("Idooru", 25, ["man"], false, "I'm Idooru");
const player2 = new playerMaker("Shere", 27, ["man"], true, "I'm Shere");

console.log(player1);
console.log(player2);
