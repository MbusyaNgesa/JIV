const deposit = document.querySelector(".deposit");
const withdraw = document.getElementsByClassName("withdraw");
const amount = document.querySelector(".amount");
const balance = document.getElementsByClassName("balance");

deposit.addEventListener("click", addDeposit);
console.log(deposit);

function addDeposit(e) {
  let newDeposit = document.querySelector(".amount").value;

  let tableData = document.createElement("tr");
  let parent = document.querySelector("#content");
  newDeposit.appendChild(newDeposit);
  console.log(tableData);
}
