const deposit = document.querySelector(".deposit");
const withdraw = document.querySelector(".withdraw");
const amount = document.querySelector(".amount");
const balance = document.querySelector(".balance");
const cash = document.querySelector(".cash");
let oriBal = 0;

// localStorage.setItem("Type", "Amount", "Date");

// document.getElementsByClassName("tableContent").innerHTML =
//   localStorage.getItem("Type", "Amount", "Date");

localStorage.setItem("Amount", JSON.stringify("tableContent"));
console.log();

deposit.addEventListener("click", addDeposit);
// console.log(deposit);
withdraw.addEventListener("click", addWithdraw);

function changeBalance() {
  let bal = document.querySelector(".amount").value;
  return parseFloat(bal);
}

function addDeposit(e) {
  e.preventDefault();
  let depositData = document.querySelector(".deposit").textContent; //Getting content within the button
  // console.log(depositData);

  let today = new Date().toLocaleDateString();
  // console.log(today);

  let newDeposit = document.querySelector(".amount").value;
  // console.log(newDeposit);
  let tableRow = document.createElement("tr");

  //Append data from deposit button
  let depoBtn = document.createElement("td");
  depoBtn.textContent = depositData; //Placing content of the button inside the 'td'
  tableRow.appendChild(depoBtn);
  // console.log(tableRow);

  let tableData = document.createElement("td");
  tableData.textContent = newDeposit; //Inserting data from input field to the tabledata created

  tableRow.appendChild(tableData); //Placing 'td' into 'tr'

  //Append date to 'td' in 'tr'
  let date = document.createElement("td");
  date.textContent = today;
  tableRow.appendChild(date);
  console.log(tableRow);

  let body = document.querySelector("tbody");
  body.appendChild(tableRow);

  const depAmt = changeBalance();
  if (isNaN(depAmt) || depAmt <= 0) {
    alert("Invalid Amount");
    return;
  }
  oriBal += depAmt; //Increments value of the balance
  cash.textContent = `${oriBal.toFixed(2)}`;

  let x = document.getElementsByClassName("cash");

  document.querySelector(".amount").value = ""; //Clears input field after depositing
}

function addWithdraw(e) {
  e.preventDefault();

  let newWithdraw = document.querySelector(".amount").value;
  let tableRow = document.createElement("tr");
  let tableData = document.createElement("td");

  const depAmt = changeBalance();
  if (isNaN(depAmt) || depAmt <= 0) {
    alert("Invalid Amount");
    return;
  }

  if (oriBal < depAmt) {
    alert("Insufficient Funds");
    return;
  } /* Logic of code is very important, we check if the balance and withdrawn
  amount meet the set conditions, if not it will not add the balance to the table */

  oriBal -= depAmt;
  cash.textContent = `${oriBal.toFixed(2)}`;

  //Append data from withdraw button
  let withdrawContent = document.querySelector(".withdraw").textContent;
  let newContent = document.createElement("td");
  newContent.textContent = withdrawContent;
  tableRow.appendChild(newContent);
  // console.log(tableRow);

  tableData.textContent = newWithdraw;
  tableRow.appendChild(tableData);
  // console.log(tableRow);

  //Add Date to Table
  let today = new Date().toLocaleDateString();
  let date = document.createElement("td");
  date.textContent = today;
  tableRow.appendChild(date);

  //Adding data in input field to the table
  let body = document.querySelector("tbody");
  body.appendChild(tableRow);

  document.querySelector(".amount").value = ""; //Clears input field after withdrawing
}
