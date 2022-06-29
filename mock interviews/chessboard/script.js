const canvas = document.getElementById("bg");

function creatingWhite() {
    const element = document.createElement("div");
    element.style.height = "20px";
    element.style.width = "20px";

    if (j % 2 === 0) {
        element.style.backgroundColor = "black";
    }
    element.style.border = "1px solid black";

    canvas.appendChild(element);
}
function creatingBlack() {
    for (j = 0; j < 8; j++) {
        const element = document.createElement("div");
        element.style.height = "20px";
        element.style.width = "20px";

        if (j % 2 !== 0) {
            element.style.backgroundColor = "black";
        }
        element.style.border = "1px solid black";

        canvas.appendChild(element);
    }
}
function creatingDivElements() {
    for (i = 0; i < 8; i++) {
        if (i % 2 === 0) {
            for (j = 0; j < 8; j++) {
                creatingWhite();
            }
        } else {
            creatingBlack();
        }
    }
}

creatingDivElements();
