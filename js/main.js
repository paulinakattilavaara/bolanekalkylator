"use strict";
// Get connection to the inputs for loan, interest and time
const loanInput = document.getElementById("loan");
const interestInput = document.getElementById("interest");
const timeInput = document.getElementById("time");
// Get connection to submit button
const submitBtn = document.getElementById("submit-btn");
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
