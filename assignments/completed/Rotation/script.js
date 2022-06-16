let count = 1;
function rotate() {
    count++;
    const current = document.getElementById("box").style.transform;
    console.log(current);
    console.log(count);

    if (count % 2 === 0) {
        document.getElementById("box").style.transform = "rotate(180deg)";
    } else if (count % 2 === 0 && current === "rotate(180deg)") {
        document.getElementById("box").style.transform = "rotate(90deg)";
    } else if (count % 2 !== 0 && current === "rotate(180deg)") {
        document.getElementById("box").style.transform = "rotate(0deg)";
    }
}
