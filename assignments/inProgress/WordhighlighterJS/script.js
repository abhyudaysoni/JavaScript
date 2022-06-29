let wordInput = document.getElementById("word-input");

let paragraphInput = document.getElementById("paragraph-input");

function highlight() {
    let para = paragraphInput.innerHTML;

    let word = document.getElementById("word-input").value;

    for (let i = 0; i < para.length; i++) {
        let paraWord = "";
        if (para[i] === " ") {
            paraWord = "";
        } else {
            paraWord += para[i];
        }
        console.log(paraWord);
        console.log(paraWord.indexOf(word));
    }
}

wordInput.addEventListener("input", highlight);
