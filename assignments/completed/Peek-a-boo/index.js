function toggleVisibility() {
    let x = document.getElementById("useless-paragraph");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}