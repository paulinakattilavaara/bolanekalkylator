"use strict";
// Get connection to the inputs for loan, interest and time
const loanInput = document.getElementById("loan");
const interestInput = document.getElementById("interest");
const timeInput = document.getElementById("time");
// Get connection to submit button
const submitBtn = document.getElementById("submit-btn");
// Adding event listener to button
submitBtn.addEventListener("click", () => {
    // Values need to be converted from string to number
    const loan = Number(loanInput.value);
    console.log(loan);
    const interest = Number(interestInput.value);
    console.log(interest);
    const time = Number(timeInput.value);
    console.log(time);
    // Calculate
});
