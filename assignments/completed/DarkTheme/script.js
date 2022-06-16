function swapTheme() {
    const div = document.querySelector("#app");
    const btn = document.querySelector("#swap");

    if (btn.className === "button_day") {
        btn.className = "button_night";
        div.className = "night";
    } else {
        btn.className = "button_day";
        div.className = "day";
    }
}
