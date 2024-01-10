"use strict";
// Get connection to the inputs for loan, interest and time
const loanInput = document.getElementById("loan");
const interestInput = document.getElementById("interest");
const timeInput = document.getElementById("time");
// Get connection to submit button
const submitBtn = document.getElementById("submit-btn");
function calculateM(P, r, n) {
    return (P * r * (1 + r) ** n) / ((1 + r) ** n - 1);
}
// Adding event listener to button
submitBtn.addEventListener("click", () => {
    // Values need to be converted from string to number
    let loan = Number(loanInput.value);
    console.log(loan);
    const interest = Number(interestInput.value) / 100 / 12;
    console.log(interest);
    const time = Number(timeInput.value) * 12;
    console.log(time);
    const errorMessage = document.createElement("p");
    const errorMessage2 = document.createElement("p");
    // Create variable to find the one to delete
    const children = document.body.querySelectorAll("p");
    let childToRemove1;
    let childToRemove2;
    // Check if time is greater than 50 years
    if (time / 12 > 50) {
        // console.log("The time is too long!");
        errorMessage.innerHTML = `Återbetalningstiden är för lång!`;
        document.body.appendChild(errorMessage);
    }
    else {
        children.forEach((child) => {
            if (child.textContent === `Återbetalningstiden är för lång!`) {
                childToRemove1 = child;
            }
        });
    }
    // Check if interest is over 40%
    if (interest * 100 * 12 > 40) {
        // console.log("The interest is too high!");
        errorMessage2.innerHTML = `Räntan du har angett är för hög!`;
        document.body.appendChild(errorMessage2);
    }
    else {
        children.forEach((child) => {
            if (child.textContent === `Räntan du har angett är för hög!`) {
                childToRemove2 = child;
            }
        });
    }
    // Calculate the monthly cost
    const monthlyCost = Number(calculateM(loan, interest, time).toFixed(2));
    // Calculate the total interest fee
    const totalInterest = loan * interest * time;
    // Present results to user if it passed the tests
    if (!(interest * 100 * 12 > 40) && !(time / 12 > 50)) {
        if (childToRemove1) {
            document.body.removeChild(childToRemove1);
        }
        if (childToRemove2) {
            document.body.removeChild(childToRemove2);
        }
        const results = document.createElement("p");
        results.innerHTML = `
  Din totala månadskostnad blir ${monthlyCost} kronor.<br>
  Din totala räntekostnad över hela låneperioden blir ${totalInterest} kronor.
  <br><br>
  `;
        document.body.appendChild(results);
    }
    // Create payment plan
    for (let month = 1; month <= time; month++) {
        const interestPayment = loan * interest;
        const installment = monthlyCost - interestPayment;
        loan -= installment;
        const results = document.createElement("p");
        results.innerHTML = `${month}&nbsp;&nbsp;&nbsp;&nbsp;${loan.toFixed(2)}`;
        document.body.appendChild(results);
    }
});
