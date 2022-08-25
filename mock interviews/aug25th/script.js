/*
Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

Examples

toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

toArray({}) ➞ []


let obj = {
  a: 1,
  b: 2,
};
let arr = [];
for (const key in obj) {
  if (Object.hasOwnProperty.call(obj, key)) {
    const element = obj[key];
    let arrObj = [key, element];
    arr.push(arrObj);
  }
}

console.log(arr);
*/
/*
Write a function redundant that takes in a string str and returns a function that returns str.

Examples
const f1 = redundant("apple")
f1() ➞ "apple"
const f2 = redundant("pear")
f2() ➞ "pear"
const f3 = redundant("")
f3() ➞ ""

const redundant = (str) => {
  function f1(str) {
    return str;
  }
  return f1(str);
};

console.log(redundant("newton"));
*/
/*
Create a function that concatenates n input arrays, where n is variable.

Examples
concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]
concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]
concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]
concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]

let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [6, 7];

// let concat = [...arr1, ...arr2, ...arr3];
// // console.log(concat);

function concat(...args) {
  return [].concat(...args);
}
console.log(concat(arr1, arr2, arr3));

//try this
*/
/*
Create a function that squares every digit of a number.

Examples
squareDigits(9119) ➞ 811181
squareDigits(2483) ➞ 416649
squareDigits(3212) ➞ 9414


let num = 2483;
let str = num.toString();
let newstr = "";
console.log(str);
for (let i = 0; i < str.length; i++) {
  let sq = str[i] * str[i];
  newstr = newstr + sq;
}

console.log(Number(newstr));
*/
//https://www.linkedin.com/in/soumya-sambit-mangaraj/
