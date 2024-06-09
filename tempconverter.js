let temp = parseInt(prompt("Enter temperature in celsius"))
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
alert(`The temperature in farenheit is ${celsiusToFahrenheit(temp)}`)
