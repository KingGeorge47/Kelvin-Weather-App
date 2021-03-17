// create a variable for kelvin = 293
var kelvin = 0

// create a variable for celcius which is 273 less than kelvin
var celsius = kelvin - 273

// create a variable for fahrenheit
let fahrenheit = celsius * (9/5) + 32
fahrenheit = Math.floor(fahrenheit)

//test code to ensure it works
console.log('The temperature is ' + fahrenheit + ' degrees fahrenheit')