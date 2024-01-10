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
