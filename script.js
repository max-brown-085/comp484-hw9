//Part 1: Date Display
//New date object set to system current date and time.
let currentDate = new Date()

//Options object allows for configuring format. Month and day set to always display 2 digits.
const options = { year: "numeric", month: "2-digit", day: "2-digit"}

//Display the current date in the format of "MM/DD/YYYY" inside the p with h2 as previous sibling and direct descendant of #date.
document.querySelector("#date > h2 + p").innerHTML = "Today is " + currentDate.toLocaleDateString("en-US", options)

//Part 2: Number Conversion and Validation
let value1 = 27 //2 numbers
let value2 = 85
let value3 = "a string"//string
let value4 = 4.2//decimal

//Converted Variables
let convertedValue1 = Number(value1)
let convertedValue2 = Number(value2)
let convertedValue3 = Number(value3)
let convertedValue4 = Number(value4)

//Value 1
document.querySelector("#value1").innerHTML = 
"Original value: " + value1 +
" &rarr; Converted: " + convertedValue1 +
" &rarr; isNaN: " + isNaN(convertedValue1) +
" &rarr; isInteger: " + Number.isInteger(convertedValue1)

//Value 2
document.querySelector("#value2").innerHTML = 
"Original value: " + value2 +
" &rarr; Converted: " + convertedValue2 +
" &rarr; isNaN: " + isNaN(convertedValue2) +
" &rarr; isInteger: " + Number.isInteger(convertedValue2)

//Value 3
document.querySelector("#value3").innerHTML = 
"Original value: " + value3 +
" &rarr; Converted: " + convertedValue3 +
" &rarr; isNaN: " + isNaN(convertedValue3) +
" &rarr; isInteger: " + Number.isInteger(convertedValue3)

//if statement 1 for part 4 TRUE
//Shows mesage if value is NaN
if(isNaN(convertedValue3)){
    document.querySelector("#value3 + p").innerHTML = "Converted value is not a number."
}

//Value 4
document.querySelector("#value4").innerHTML = 
"Original value: " + value4 +
" &rarr; Converted: " + convertedValue4 +
" &rarr; isNaN: " + isNaN(convertedValue4) +
" &rarr; isInteger: " + Number.isInteger(convertedValue4)

//if statement 2 for part 4 FALSE
//Shows message if value is NaN, otherwise shows message that value is a number
if(isNaN(convertedValue4)){
    document.querySelector("#value4 + p").innerHTML = "Converted value is not a number."
}
else{
    document.querySelector("#value4 + p").innerHTML = "Converted value is a number."
}

//Part 3: Number Formatting and Math Results
let itemPrice = 14.99, taxRate = 0.095, amountBought = 5
document.querySelector("#math > h3").innerHTML = "Item Price: $" + itemPrice + "<br>Amount Bought: " + amountBought + "<br>Tax Rate: " + taxRate

//Price of bought items
let subTotal = itemPrice * amountBought
document.querySelector("#math > h3 + p").innerHTML = 
amountBought + " x $" + itemPrice +
"<br>Subtotal: $" + subTotal

//Tax amount based on subtotal
let taxAmount = (subTotal * taxRate).toFixed(2)
document.querySelector("#math > h3 + p + p").innerHTML = "Tax (" + (taxRate * 100) + "%): $" + taxAmount

//Total cost after tax added
let totalCost = (subTotal + Number.parseFloat(taxAmount)).toFixed(2)
document.querySelector("#math > h3 + p + p + p").innerHTML = "Total Cost: $" + totalCost

//Part 4: Conditional Messages
//if statements on line 46 and 59