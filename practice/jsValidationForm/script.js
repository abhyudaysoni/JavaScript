let errorHolderCon = document.getElementById("errors-holder");
let resultHolderCon = document.getElementById("result-holder");
let checkbox = document.getElementById("q_owns_phone");
let btn = document.querySelector("button");

function ageChange(e) {
    if (e.value < 5) {
        console.log(e.value);
        errorHolderCon.innerHTML =
            "You need to be atleast 5 years old to participate";
        btn.disabled = true;
    } else {
        errorHolderCon.innerHTML = "";
        btn.disabled = false;
    }
}

function handleSubmit(e) {
    // e.preventDefault()
    let age = document.getElementById("q_age").value;
    if (age == 0) {
        errorHolderCon.innerHTML = "Please choose age";
    } else if (checkbox.checked == true) {
        if (age < 13) {
            resultHolderCon.innerHTML = "You are too young to have a phone";
        } else {
            resultHolderCon.innerHTML = "Use your phone in moderation";
        }
    } else {
        if (age > 13) {
            resultHolderCon.innerHTML = "You will get a phone soon";
        } else {
            resultHolderCon.innerHTML = "You should get a phone";
        }
    }
}
