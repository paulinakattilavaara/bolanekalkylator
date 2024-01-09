// Get connection to the inputs for loan, interest and time
const loanInput = document.getElementById("loan") as HTMLInputElement;
const interestInput = document.getElementById("interest") as HTMLInputElement;
const timeInput = document.getElementById("time") as HTMLInputElement;

// Get connection to submit button
const submitBtn = document.getElementById("submit-btn") as HTMLButtonElement;

submitBtn.addEventListener("click", () => {
  const loan = loanInput.value;
  console.log(loan);
  const interest = interestInput.value;
  console.log(interest);
  const time = timeInput.value;
  console.log(time);

  // Values need to be converted to number
});

// Adding event listener varför behövs denna??
// loanInput.addEventListener("input", (event) => {
//   const target = event.target as HTMLInputElement;
//   console.log("Värde: " + target.value);
// });
