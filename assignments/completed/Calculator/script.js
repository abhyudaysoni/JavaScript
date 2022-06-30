//selecting all the numbers
// const nums = new Array();
// for (let i = 0; i <= 9; i++) {
//     nums[i] = document.getElementById(`block${i}`);
// }

//selecting elements that are visible in the textbox
const numbers = document.querySelectorAll("button");
console.log(numbers);

//selecting the operations
// const plus = document.getElementById("plus");
// const minus = document.getElementById("minus");
// const multiply = document.getElementById("multiply");
// const divide = document.getElementById("divide");
// const answer = document.getElementById("ans");
// const dot = document.getElementById("dot");

//selecting the text field
const field = document.getElementById("input");

//adding event listeners to all buttons
numbers.forEach(function (button) {
    addEventListener("click", calculate);
});

function calculate(event) {
    const clickedButtonValue = event.target.value;
    if (clickedButtonValue === "=") {
        if (field.value !== "") {
            field.value = eval(field.value);
        }
    } else if (clickedButtonValue === "clr") {
        field.value = "";
    } else {
        field.value += clickedButtonValue;
    }
}
