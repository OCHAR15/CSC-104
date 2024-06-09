let principal = parseInt(prompt("Enter the principal"))
let rate = parseInt(prompt("Enter the rate"))
let time = parseInt(prompt("Enter the time"))
let compoundsPerYear = parseInt(prompt("Enter the Compounds per year"))
function compoundInterest(principal, rate, time, compoundsPerYear) {
    return principal * (1 + rate / compoundsPerYear) * (compoundsPerYear * time);
  }
alert(`The compound interest is ${compoundInterest(principal, rate,time,compoundsPerYear)}`)
