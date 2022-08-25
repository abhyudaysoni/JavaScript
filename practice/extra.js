import fetch from "node-fetch";

const url = `https://restcountries.com/v3.1/all`;

async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
const objData = getData();
objData.then((data) => console.log(data));
