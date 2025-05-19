// function foo(a) {
//   return a.join("");
// }

// console.log(foo({}));
// console.log(foo(85));
// console.log(foo(null));

// function foo(son) {
//   return Math.trunc(son * 100) / 100;
// }
// console.log(foo(54.215));
// console.log(foo(7.3));
// console.log(foo(8.3));
// console.log(foo(8.31155));

// function lor(a) {
//   return a.length - a.split("?").join("").length;
// }
// console.log(lor("Lorem? ipsum?"));
// console.log(lor("?Hello? ?world?"));

// function son(a) {
//   return a
//     .split(" ")
//     .map((wor) => wor[0])
//     .join(".")
//     .toUpperCase();
// }
// console.log(son("Lorem ipsum dolor"));
// console.log(son("Hello Wolld"));

function yangi(a) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
}

console.log(yangi([1, 2, 5, 2, 1]));
console.log(yangi([3, 3, 4, 5, 5]));
