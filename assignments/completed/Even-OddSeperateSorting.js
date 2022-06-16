/*
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function sortEvenOdd(arr, arrSize) {
    let i = 0;
    let j = 0;
    while (i < arrSize) {
        if (arr[i] % 2 !== 0) {
            swap(arr, i, j);
            i++;
            j++;
        } else {
            i++;
        }
    }

    for (let x = 0; x < j - 1; x++) {
        for (let y = 0; y < j - x - 1; y++) {
            if (arr[y] < arr[y + 1]) {
                swap(arr, y, y + 1);
            }
        }
    }

    for (let x = j; x < arr.length - 1; x++) {
        for (let y = j; y < arr.length - x + j - 1; y++) {
            if (arr[y] > arr[y + 1]) {
                swap(arr, y, y + 1);
            }
        }
    }
    let res = "";
    for (let x = 0; x < arr.length; x++) {
        res = res + String(arr[x]) + " ";
    }
    console.log(res);
}
let arr = [1, 2, 9, 5, 4, 7, 10, 3, 6, 9, 4, 6];
let arrsize = arr.length;
sortEvenOdd(arr, arrsize);
*/
function sortEvenOdd(arr, arrSize) {
    const odd = arr.filter((item) => { return item % 2 != 0 });
    const even = arr.filter((item) => { return item % 2 === 0 });

    odd.sort(function (a, b) { return b - a });

    even.sort(function (a, b) { return a - b });

    const result = [...odd, ...even];
    return result;
}