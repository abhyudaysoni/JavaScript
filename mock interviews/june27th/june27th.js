const fName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const show = document.getElementById("show");

// console.log(fName.value);
// console.log(email.value);
// console.log(phone.value);

function display() {
    console.log(String(phone.value)[0]);

    if (
        String(phone.value).length !== 10 ||
        String(phone.value).length[0] === 0
    ) {
        show.innerHTML = `invalid phone number`;
        // alert(`invalid phone number`);
    } else {
        show.innerHTML = `name:${fName.value} email:${email.value} phone:${phone.value}`;
        // alert(`name:${fName.value} email:${email.value} phone:${phone.value}`);
    }
}
