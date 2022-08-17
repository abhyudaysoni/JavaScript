const exampleText = document.getElementById("text-container");
let bold = false;
let italics = false;
let underline = false;

function changeColor() {
    const color = document.getElementById("colorbox");
    exampleText.style.color = color.value;
}
function setFontSize() {
    const font = document.getElementById("font-size");
    exampleText.style.fontSize = `${font.value}px`;
}
function setBoldness() {
    if (!bold) {
        exampleText.style.fontWeight = "bold";
        bold = true;
    } else {
        exampleText.style.fontWeight = "normal";
        bold = false;
    }
}
function setItalics() {
    if (!italics) {
        exampleText.style.fontStyle = "italic";
        italics = true;
    } else {
        exampleText.style.fontStyle = "normal";
        italics = false;
    }
}
function setUnderline() {
    if (!underline) {
        exampleText.style.textDecoration = "underline";
        underline = true;
    } else {
        exampleText.style.textDecoration = "none";
        underline = false;
    }
}
function selectFontFamily() {
    let fontFamily = document.getElementById("select-font-family");
    exampleText.style.fontFamily = fontFamily.value;
}
function copyProperties() {}
