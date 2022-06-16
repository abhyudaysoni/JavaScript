let names = new Array();
let prices = new Array();
let count = 1;

function insertItem() {
    let fullName = document.getElementById("item-name-input").value;

    let price = parseFloat(document.getElementById("item-price-input").value);

    let grandTotal = document.getElementById("sum");

    if (!fullName || isNaN(price)) {
        document.getElementById("item-name-input").value = "";
        document.getElementById("item-price-input").value = "";

        return;
    } else {
        let tableBody = document.getElementById("groceryList");

        let r1 = document.createElement("tr");

        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");

        td1.innerText = count;
        td2.innerText = fullName;
        td3.innerText = price.toFixed(2);
        td3.style.textAlign = "right";

        r1.appendChild(td1);
        r1.appendChild(td2);
        r1.appendChild(td3);

        tableBody.appendChild(r1);

        grandTotal.textContent = Number(grandTotal.textContent) + price;

        count++;
        names.push(fullName);
        prices.push(price);
    }

    document.getElementById("item-name-input").value = "";
    document.getElementById("item-price-input").value = "";
}
