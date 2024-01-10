"use strict";
// Get connection to the inputs for loan, interest and time
const loanInput = document.getElementById("loan");
const interestInput = document.getElementById("interest");
const timeInput = document.getElementById("time");
// Get connection to submit button
const submitBtn = document.getElementById("submit-btn");
function calculateM(P, r, n) {
    return P * r * ((1 + r) ** n) / (((1 + r) ** n) - 1);
}
// Adding event listener to button
submitBtn.addEventListener("click", () => {
    // Values need to be converted from string to number
    const loan = Number(loanInput.value);
    console.log(loan);
    const interest = Number(interestInput.value) / 100 / 12;
    console.log(interest);
    const time = Number(timeInput.value) * 12;
    console.log(time);
    // Calculate the monthly cost
    console.log(calculateM(loan, interest, time));
});
