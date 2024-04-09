const tipTotalOutput = document.getElementById("tip-total");
const tipSplitTotalOutput = document.getElementById("tip-split-total");
const billInput = document.getElementById("bill");
const numberOfPeople = document.getElementById("people");
const tipPercentages = document.querySelectorAll("button");
const errorDisplay = document.getElementById("error-display");

let currentTipPercentage;

function calculateTipSplit(bill, perc, people) {
  if (numberOfPeople.value <= 1) {
    errorDisplay.textContent = "Can't be zero ";
    return;
  }
  const tipSplit = ((bill * perc) / 100).toFixed(2);
  const billSplit = (bill / people).toFixed(2);
  const grandTotalPerPerson = (
    parseInt(tipSplit) + parseInt(billSplit)
  ).toFixed(2);

  console.log(billSplit);

  tipTotalOutput.textContent = tipSplit;
  tipSplitTotalOutput.textContent = grandTotalPerPerson;
  errorDisplay.textContent = "";
}

tipPercentages.forEach((button) =>
  button.addEventListener("click", function () {
    currentTipPercentage = parseInt(button.innerText);
    calculateTipSplit(
      billInput.value,
      currentTipPercentage,
      numberOfPeople.value
    );
  })
);
