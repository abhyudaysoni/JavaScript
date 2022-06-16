let totalPrice = 0;

let prices = document.querySelectorAll("table tr td:last-child");
console.log(prices[0]);
for (let i = 0; i < prices.length; i++) {
    totalPrice = totalPrice + parseFloat(prices[i].textContent);
}

let tbl = document.getElementById("my-table");
let tr = document.createElement("tr");
let td = document.createElement("td");
td.setAttribute("data-ns-test", "grandTotal");

td.innerText = totalPrice;

tr.appendChild(td);
tbl.appendChild(tr);
