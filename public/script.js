const deposit = document.querySelector(".deposit");
const withdraw = document.getElementsByClassName("withdraw");
const amount = document.querySelector(".amount");
const balance = document.getElementsByClassName("balance");

deposit.addEventListener("click", addDeposit);
// console.log(deposit);

function addDeposit(e) {
  // let newDeposit = document.querySelector(".amount").value;
  // let parent = document.querySelectorAll(".cash");
  // parent.appendChild(newDeposit);9
  // let tableData = document.createElement("tr");

  // tableData.appendChild(newDeposit);
  // let parent = document.querySelector("#content");
  // newDeposit.appendChild(newDeposit);
  // console.log(tableData);

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

  // let amount = document.querySelector(".cash");
  // amount.appendchild(tableRow);
}
