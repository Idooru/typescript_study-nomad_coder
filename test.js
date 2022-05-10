const a = null;
const b = null;
const c = null;

if (!a && !b && !c) {
  console.log("셋중에 하나라도 없으면 안됨");
} else if (!a || !b || !c) {
  console.log("ㅗ");
} else {
  console.log("셋다없음");
}
