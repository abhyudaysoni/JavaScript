document.getElementById("q_age").oninput = function () {
    ageChange();
};

function displayError(errorMessage) {
    document.getElementById("errors-holder").innerHTML = errorMessage;
}
function displayResult(resultMessage) {
    document.getElementById("result-holder").innerHTML = resultMessage;
}

function ageChange() {
    let currentAge = parseInt(document.getElementById("q_age").value);

    if (currentAge === 0) {
        displayError("Please choose age");
    } else if (currentAge < 5 && currentAge > 0) {
        displayError("You need to be atleast 5 years old to participate");
        document.getElementById("btn").disabled = true;
    } else if (currentAge >= 5) {
        displayError("");
        document.getElementById("btn").disabled = false;
    }
}
function checkBoxCondition() {
    let checkBoxStatus = document.getElementById("q_owns_phone");
    if (checkBoxStatus.checked) {
        return true;
    } else {
        return false;
    }
}

function handleSubmit() {
    console.log(checkBoxCondition());
    let currentAge = parseInt(document.getElementById("q_age").value);

    if (currentAge === 0) {
        displayError("Please choose age");
    } else if (checkBoxCondition() && currentAge < 13) {
        displayResult("You are too young to have a phone");
    } else if (!checkBoxCondition() && currentAge < 13) {
        displayResult("You will get a phone soon");
    } else if (currentAge > 13 && checkBoxCondition()) {
        displayResult("Use your phone in moderation");
    } else if (currentAge < 13 && !checkBoxCondition()) {
        displayResult("You will get a phone soon");
    } else if (currentAge > 13 && !checkBoxCondition()) {
        displayResult("You should get a phone");
    }
}
