function addItself1(num) {
    num = num + num;
    return num;
}
console.log(addItself1(5));

var a = 10;
var a = 20;
console.log(a);

function map(factorial, num) {
    return factorial(num) - 1;
}

const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
};
console.log(map(factorial, 6));
console.log(factorial(5));
