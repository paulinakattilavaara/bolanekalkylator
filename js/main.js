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
    // Clear previous results and error messages
    clearPreviousResults();
    const errorMessage = document.createElement("p");
    const errorMessage2 = document.createElement("p");
    // Check if time is greater than 50 years
    if (time / 12 > 50) {
        errorMessage.innerHTML = `Återbetalningstiden är för lång!<br>`;
        document.body.appendChild(errorMessage);
    }
    // Check if interest is over 40%
    if (interest * 100 * 12 > 40) {
        errorMessage2.innerHTML = `Räntan du har angett är för hög!<br>`;
        document.body.appendChild(errorMessage2);
    }
    // Calculate the monthly cost
    const monthlyCost = Number(calculateM(loan, interest, time).toFixed(2));
    // Calculate the total interest fee
    const totalInterest = loan * interest * time;
    // Present results to user if it passed the tests
    if (!(interest * 100 * 12 > 40) && !(time / 12 > 50)) {
        const results = document.createElement("p");
        results.innerHTML = `
  Din totala månadskostnad blir ${monthlyCost} kronor.<br>
  Din totala räntekostnad över hela låneperioden blir ${totalInterest} kronor.
  <br><br>
  `;
        document.body.appendChild(results);
    }
    // Create payment plan
    if (!(interest * 100 * 12 > 40) || !(time / 12 > 50)) {
        for (let month = 1; month <= time; month++) {
            const interestPayment = loan * interest;
            const installment = monthlyCost - interestPayment;
            loan -= installment;
            if (loan <= 0) {
                break;
            }
            const results2 = document.createElement("p");
            results2.innerHTML = `Månad ${month}&nbsp;&nbsp;&nbsp;&nbsp;${loan.toFixed(2)}`;
            document.body.appendChild(results2);
        }
    }
});
// Function to clear previous results and error messages
function clearPreviousResults() {
    const existingResults = document.querySelectorAll("p");
    existingResults.forEach(result => {
        result.remove();
    });
}
