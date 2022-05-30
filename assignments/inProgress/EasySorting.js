function easySorting(arr) {
    // Your code here
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                swap(arr, j, j - 1);
            }
        }
    }
    let s = "";
    for (let i = 0; i < arr.length; i++) {
        s = s + arr[i] + " ";
    }
    console.log(s);
}
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
