const canvas = document.querySelector(".container");

function creatingDivs() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 4; j++) {
            console.log(`${i}, ${j}`);
            if (i % 2 === 0) {
                createBlacks();
                createWhites();
            }
            if (i % 2 !== 0) {
                createWhites();
                createBlacks();
            }
        }
    }
}

function createBlacks() {
    console.log("creating blacks");
    const blackTile = document.createElement("div");
    blackTile.setAttribute("class", "black-tile");
    canvas.appendChild(blackTile);
}
function createWhites() {
    console.log("creating whites");
    const whiteTile = document.createElement("div");
    whiteTile.setAttribute("class", "white-tile");
    canvas.appendChild(whiteTile);
}

creatingDivs();
