// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: 4 of type Number

// b) Verify and explain: It actually returns 5 of type Number because it returns the new length of the array. I thought that the push method returned the index of the newly appended element. The push method adds the argument to the end of the array that it is being called on. The current length of colors is 4 and when you push a new element the new length would be 5.

// --------------------1) What will this log?

const cohort = "Alpha 2022"
// console.log(cohort.length)

// a) Your answer: 10 of type Number

// b) Verify and explain: I was correct. The length property will return the length of the string it is being called on. Whitespace is a character in the string and is therefore included in the count.


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: "o" of type String

// b) Verify and explain: Yes, I was right. This is because we are selecting the 4th index of the variable of greeting. Computers start counting at zero. This variable is a string so it will give us the character at the 4th index which is "o".


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: "Ruby" of type String
// b) Verify and explain: Yep, were taking the array of languages and selcting the index of 1 as by declaration of the index variable which is assigned to the number 1.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: This will throw an error
// b) Verify and explain: Yeah, the toUpperCase method is for strings not arrays. You could loop through the array and then call the method on each element individually.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: The length method returns the length of the array which is a number of 3 and since you are getting the type of that it would be number.
