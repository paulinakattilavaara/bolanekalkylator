// Get connection to the inputs for loan, interest and time
const loanInput = document.getElementById("loan") as HTMLInputElement;
const interestInput = document.getElementById("interest") as HTMLInputElement;
const timeInput = document.getElementById("time") as HTMLInputElement;

// Get connection to submit button
const submitBtn = document.getElementById("submit-btn") as HTMLButtonElement;

function calculateM(P: number, r: number, n: number): number {
  return P * r * ((1 + r) ** n) / (((1 + r) ** n) - 1);
}


// Adding event listener to button
submitBtn.addEventListener("click", () => {
  // Values need to be converted from string to number
  const loan: number = Number(loanInput.value);
  console.log(loan);
  const interest: number = Number(interestInput.value) / 100 / 12;
  console.log(interest);
  const time: number = Number(timeInput.value) * 12;
  console.log(time);

   // Check if time is greater than 50 years
   if (time / 12 > 50) {
    console.log("The time is too long!");
  }

  // Check if interest is over 40%
  if ((interest * 100 * 12) > 40) {
    console.log("The interest is too high!");
  }

  // Calculate the monthly cost
  console.log(calculateM(loan, interest, time).toFixed(2));
});
