let totalPrice = 0;
function calcTotal() {
    let test = document.querySelector(
        "table tr:last-child td:first-child"
    ).textContent;

    if (test === "Grand Total") {
        document.querySelector("table tr:last-child td:last-child").value = 0;
        let prices = document.querySelectorAll("table tr td:last-child");

        totalPrice = 0;

        for (let i = 0; i < prices.length - 1; i++) {
            totalPrice = totalPrice + parseInt(prices[i].textContent);
        }

        document.querySelector(
            "table tr:last-child td:last-child"
        ).textContent = totalPrice;

        totalPrice = 0;
    } else {
        let prices = document.querySelectorAll("table tr td:last-child");

        totalPrice = 0;

        for (let i = 0; i < prices.length; i++) {
            totalPrice = totalPrice + parseInt(prices[i].textContent);
        }

        let tableBody = document.getElementById("tableBody");

        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");

        td1.innerText = "Grand Total";
        td2.innerText = totalPrice;
        td2.setAttribute("data-ns-test", "grandTotal");

        row.appendChild(td1);
        row.appendChild(td2);

        tableBody.appendChild(row);
        totalPrice = 0;
    }
}
