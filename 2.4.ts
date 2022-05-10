let value: unknown = "hello";

if (typeof value === "string") {
  console.log(`${value} is stirng type`);
} else if (typeof value === "number") {
  console.log(`${value} is number type`);
} else {
  console.log(`${value} is maybe unknown`);
}

let valueNum: unknown = 10;
let valueStr: unknown = "Test";

// console.log(valueNum.length);
// console.log(valueStr.length);

function noneReturn(): void {
  console.log("I will not return!");
}

function neverEnd(): never {
  //   const test = () => {
  //     setInterval(() => {
  //       console.log("I will not end!");
  //     }, 500);
  //   };
  let i = 0;
  while (true) {
    console.log("too many execute");
  }
}

function polymorphism(params: number | string): void {
  if (typeof params === "string") {
    console.log("string");
  } else if (typeof params === "number") {
    console.log("number");
  } else {
    console.log("you can not acess here");
  }
}

noneReturn();
polymorphism("hello");
neverEnd();
