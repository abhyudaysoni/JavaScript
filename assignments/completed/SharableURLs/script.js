// const url = document.getElementById("url");

// url.innerHTML = "https://localhost:8080/";

// function generateURL() {
//     let url2 = String(document.URL);
//     url2 = url2.split("?");

//     url.innerHTML = `https://localhost:8080/${url2[1]}`;
// }

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const url = document.querySelector("#url");
  const nameEl = document.querySelector("#name");
  const yearEl = document.querySelector("#year");
  url.innerHTML = "https://localhost:8080/";
  if (nameEl.value != "" && yearEl.value != "") {
    url.innerHTML += `?name=${nameEl.value}&year=${yearEl.value}`;
  } else if (nameEl.value != "" && yearEl.value === "") {
    url.innerHTML += `?name=${nameEl.value}`;
  } else if (nameEl.value === "" && yearEl.value != "") {
    url.innerHTML += `?year=${yearEl.value}`;
  }
});