let wordInput = document.getElementById("word-input");

let paragraphInput = document.getElementById("paragraph-input");

function highlight() {
    //selecting the paragraph text
    let para = paragraphInput.innerHTML;

    let word = document.getElementById("word-input").value;

    console.log(para);
    console.log(word);

    console.log(para.indexOf(word));
    //to highlight
    for (let i = 0; i < para.length; i++) {
        let text = para.match(word);
        console.log(text);
    }
}

wordInput.addEventListener("input", highlight);
