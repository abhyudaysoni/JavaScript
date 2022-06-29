//selecting all the numbers
const nums = new Array();
for (let i = 0; i <= 9; i++) {
    nums[i] = document.getElementById(`block${i}`);
}

//selecting all the symbols
const syms = new Array();
for (let i = 0; i <= 9; i++) {
    syms[i] = document.getElementById(`sym${i}`);
}

//selecting the text field
const field = document.getElementById("field");
