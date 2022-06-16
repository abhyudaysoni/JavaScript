function displayRandomNumber() {
    const output = document.querySelector("#num");
    const rand = Math.random();
    if (rand >= 0 && rand <= 0.5) output.innerHTML = Math.floor(rand * -20) + 1;
    else output.innerHTML = Math.floor(rand * 20) + 1;
}