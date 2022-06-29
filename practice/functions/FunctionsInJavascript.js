// function addItself1(num) {
//     num = num + num;
//     return num;
// }
// console.log(addItself1(5));

// var a = 10;
// var a = 20;
// console.log(a);

// function map(factorial, num) {
//     return factorial(num) - 1;
// }

// const factorial = function fac(n) {
//     return n < 2 ? 1 : n * fac(n - 1);
// };
// console.log(map(factorial, 6));
// console.log(factorial(5));

let str = "154212321";

let res = true;
for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
        res = false;
    }
}
console.log(res);
