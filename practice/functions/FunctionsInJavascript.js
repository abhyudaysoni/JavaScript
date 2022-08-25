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

// let str = "154212321";

// let res = true;
// for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//         res = false;
//     }
// }
// console.log(res);
const todaysDate = new Date();
const strDate = todaysDate;
const date = {
  day: "",
  month: "",
  year: "",
};

const time = {
  hour: "",
  minutes: "",
  seconds: "",
};

console.log(todaysDate);

date.day = todaysDate.getDate();
date.month = todaysDate.getMonth();
date.year = todaysDate.getFullYear();
time.hour = todaysDate.getHours();
time.minutes = todaysDate.getMinutes();
time.seconds = todaysDate.getSeconds();

console.log(`${date.day}/${date.month}/${date.year}`);
console.log(`${time.hour}:${time.minutes}:${time.seconds}`);

console.log(Date.now());

console.log(strDate);

console.log(Date.parse(strDate));

const newDate = new Date(Date.UTC(2022, 7, 18, 20, 20, 20, 50));
console.log(newDate.toUTCString());

console.log(todaysDate.toLocaleString());
console.log(todaysDate.toLocaleDateString());
console.log(todaysDate.toLocaleTimeString());

console.log(todaysDate.toTimeString());
console.log(todaysDate.toDateString());

console.log(todaysDate.toString());
