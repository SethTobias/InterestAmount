function calculateInterest() {
  let amount = document.querySelector(".principleAmount").value;
  let rate = document.querySelector(".interestRateInput").value;
  let time = document.querySelector(".timeFrame").value;
  interestAmount = (amount * rate * time) / 100;
  document.querySelector(".totalInterest").innerText = "R " + interestAmount;
  document.querySelector(".amount").innerText = "R " + amount;
  document.querySelector(".interestRate").innerText = rate + " %";
  document.querySelector(".time").innerText = time + " days";
}

let calculate = document.querySelector("button");
calculate.addEventListener("click", () => calculateInterest());
