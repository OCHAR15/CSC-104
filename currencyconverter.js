let naira = prompt("Enter amount in naira")
function ngnToUsd(ngn) {
    return ngn / 1447.5; // Assuming an exchange rate of 1 USD = 1447.5 NGN
  }
 
alert(`The amount in dollars is ${ngnToUsd(naira)}`)