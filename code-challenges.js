// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"

//  Pseudo Code
// create a function named longerString
// longerString will take two arguments (stringOne and stringTwo) both of type string
// we will have a three conditions to check
// 1) we will check if the length of stringOne is equal to length of stringTwo
// if true, we will return that they are the same length
// 2) we will check if the length of stringOne is greater than the length of stringTwo
// if true, we will return stringOne
// 3) we can use a catch all that will execute on all other occasions
// the only other condition that it would be is that the length of stringTwo is greater than the length of stringOne. So, we will return stringTwo

// Code
const longerString = (stringOne, stringTwo) => {
    if (stringOne.length === stringTwo.length) {
        return "The strings are the same length."
    }
    else if (stringOne.length > stringTwo.length) {
        return stringOne
    }
    else {
        return stringTwo
    }
}

console.log(longerString(fruit1, fruit3))
// console.log(longerString("the same length", "the same length"))
// console.log(longerString("the longer string", "taco"))


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

const temp1 = 42
const temp2 = 350
const temp3 = 212

// Pseudo Code
// Create a function named howHot
// howHot will take a single argument (temp) of the type Integer
// we can check three conditions here
// 1) if the temp is equal to 212
// if so we can return "<temp> is at boiling point"
// 2) if the temp is less than 212
// if so we can return "<temp> is below boiling point"
// 3) now we can use a catch all because the only other case would be that temp is greater than 212
// return "<temp> is above boiling point"

// Code
const howHot = (temp) => {
    if (temp === 212) {
        return `${temp} is at boiling point`
    }
    else if (temp < 212) {
        return `${temp} is below boiling point`
    }
    else {
        return `${temp} is above boiling point`
    }
}

console.log(howHot(temp1))
console.log(howHot(temp2))
console.log(howHot(temp3))

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

// Pseudo Code
// create a variable named concattedArray
// assign concattedArray to the two arrays merged together
// get the length of concattedArray

const concattedArray = myNumbers1.concat(myNumbers2)
console.log(concattedArray.length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ahplA"

const currentCohort = "Alpha 2022"

// Pseudo Code
// create a variable named stringArr
// assign stringArr to an array of strings with the content of currentCohort split apart
// reverse the values of stringArr
// create a variable named reversedString
// assign reversedString with the contents of stringArr put back together into a string

// Code
const stringArr = currentCohort.split("")
stringArr.reverse()
const reversedString = stringArr.join("")
console.log(reversedString)

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

const myArray = [13, 34, 5, 10, 27, 42]

// Pseudo Code
// create a loop that will iterate over myArray
// for each element of myArray we will check for two conditions
// 1) we will check if the number is even
// if true, we will log "even"
// 2) we can use a catch all because whatever number is not even must be odd
// log "odd"

// Code
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    if (element % 2 === 0) {
        console.log("even")
    }
    else {
        console.log("odd")
    }
}

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

// Pseudo Code
// create a function named subtractLarger
// subtractLarger will take two arguments (numOne, numTwo) of type Number
// we will have two more variables store our smaller and larger number (larger, smaller)
// we can use a conditional compare the two numbers
// if numOne is greater than or equal to numTwo: assign numOne to larger and numTwo to smaller (this will handle if both numbers are the same)
// else numTwo is greater and numOne is smaller
// we can subtract larger from smaller

// Code
const subtractLarger = (numOne, numTwo) => {
    let larger, smaller
    if (numOne >= numTwo) {
        [larger, smaller] = [numOne, numTwo]
    }
    else {
        [larger, smaller] = [numTwo, numOne]
    }
    return larger - smaller
}

console.log(subtractLarger(number1, number2))
console.log(subtractLarger(number3, number4))
// console.log(subtractLarger(100, 100))