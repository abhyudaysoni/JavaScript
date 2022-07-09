let currentUser = null;
const nameElement = document.querySelector("#name");
const imageElement = document.querySelector("#userImg");
const getUserBtn = document.querySelector("#getUser");
const ageBtn = document.querySelector("[data-attr='age']");
const emailBtn = document.querySelector("[data-attr='email']");
const phoneBtn = document.querySelector("[data-attr='phone']");
const infoElement = document.querySelector("#info");

function fetchNewUser() {
    fetch("https://randomuser.me/api/")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            currentUser = data.results[0];
            nameElement.innerHTML = `${currentUser.name.first} ${currentUser.name.last}`;
            imageElement.src = currentUser.picture.large;
        });
}

fetchNewUser();

getUserBtn.addEventListener("click", () => {
    fetchNewUser();
});

ageBtn.addEventListener("click", () => {
    if (currentUser !== null) {
        infoElement.innerHTML = currentUser.dob.age;
    }
});

emailBtn.addEventListener("click", () => {
    if (currentUser !== null) {
        infoElement.innerHTML = currentUser.email;
    }
});

phoneBtn.addEventListener("click", () => {
    if (currentUser !== null) {
        infoElement.innerHTML = currentUser.phone;
    }
});
