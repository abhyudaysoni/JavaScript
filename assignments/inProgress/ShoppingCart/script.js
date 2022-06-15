let names = new Array();
let prices = new Array();
count = 1;

function insertItem() {
    let table = document.getElementById("groceryList");

    let fullName = document.getElementById("item-name-input").value;

    let price = document.getElementById("item-price-input").value;

    let grandTotal = Number(document.getElementById("grandTotal").textContent);

    if (!fullName || isNaN(price)) {
        alert(`Enter Name`);
        document.getElementById("item-name-input").value = "";
        document.getElementById("item-price-input").value = "";

        return;
    } else {
        let row = table.insertRow(-1);
        let srNo = row.insertCell(0);
        let Title = row.insertCell(1);
        let Price = row.insertCell(2);
        srNo.innerHTML = count;

        Title.innerHTML = fullName;

        Price.innerHTML = Number(price);

        grandTotal = Number(grandTotal) + Number(price);
        document.getElementById("grandTotal").innerHTML = grandTotal;

        names.push(fullName);
        prices.push(price);
        count++;

        console.log(names);
        console.log(prices);
    }

    document.getElementById("item-name-input").value = "";
    document.getElementById("item-price-input").value = "";
}
