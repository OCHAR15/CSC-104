let principal = parseInt(prompt("Enter the prinipal"))
let rate = parseInt(prompt("Enter the rate"))
let time = parseInt(prompt("Enter the time"))
function simpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
  }
alert(`The simple interest is ${simpleInterest(principal, rate,time)}`)