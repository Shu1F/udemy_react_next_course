// 三項演算子（ ? : ）

const a = 0;
let resultA = a ? 10 : -10;

// if (a) {
//   resultA = "true";
// } else {
//   resultA = "false";
// }
console.log(resultA);

function getResult() {
  return a ? "10" : "20";
}

console.log(getResult());
