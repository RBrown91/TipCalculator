const tipTotalOutput = document.getElementById("tip-total");
const tipSplitTotalOutput = document.getElementById("tip-split-total");
const billInput = document.getElementById("bill");
const numberOfPeople = document.getElementById("people");
const tipPercentages = document.querySelectorAll("button");
const errorDisplay = document.getElementById("error-display");
const resetBtn = document.getElementById("reset-button");
const customPercentage = document.getElementById("custom");

let currentTipPercentage;

function calculateTipSplit(bill, perc, people) {
  if (numberOfPeople.value <= 1) {
    errorDisplay.textContent = "Can't be less than 2";
    return;
  }
  const tipSplit = ((bill * perc) / 100).toFixed(2);
  const billSplit = (bill / people).toFixed(2);
  const grandTotalPerPerson = (
    parseInt(tipSplit) + parseInt(billSplit)
  ).toFixed(2);

  tipTotalOutput.textContent = `£${tipSplit}`;
  tipSplitTotalOutput.textContent = `£${grandTotalPerPerson}`;
  errorDisplay.textContent = "";
}

tipPercentages.forEach((button) =>
  button.addEventListener("click", function () {
    currentTipPercentage = parseInt(button.innerText);
    calculateTipSplit(
      billInput.value,
      currentTipPercentage,
      numberOfPeople.value,
      (resetBtn.disabled = false)
    );
  })
);

resetBtn.addEventListener("click", () => {
  currentTipPercentage;
  tipTotalOutput.textContent = "0.00";
  tipSplitTotalOutput.textContent = "0.00";
  errorDisplay.textContent = "";
  billInput.value = "";
  numberOfPeople.value = "";
  customPercentage.value = "";
  resetBtn.disabled = true;
});

if (billInput.value === "") {
  resetBtn.disabled = true;
}

customPercentage.addEventListener("input", () => {
  calculateTipSplit(
    billInput.value,
    customPercentage.value,
    numberOfPeople.value,
    (resetBtn.disabled = false)
  );
});
