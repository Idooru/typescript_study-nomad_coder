// const a = null;
// const b = null;
// const c = null;

// if (!a && !b && !c) {
//   console.log("셋중에 하나라도 없으면 안됨");
// } else if (!a || !b || !c) {
//   console.log("ㅗ");
// } else {
//   console.log("셋다없음");
// }

"use strict";
class User {
  constructor(firstName, lastName, nickname) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickname = nickname;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
class Player extends User {}
const nico = new Player("nico", "las", "니꼬");
console.log(nico.nickname);
console.log(User.firstName);
console.log(nico.getFullName());
