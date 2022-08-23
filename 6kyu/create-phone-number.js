// Create Phone Number

// DESCRIPTION:
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// EXAMPLE:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

// SOLUTION:

// Parameters: an array of numbers
// Returns: a string of numbers formatted as a phone number
// Examples: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// Pseudo code: 

// function that takes in an array
function createPhoneNumber(numbers){
    // variable to store array as a string of numbers
    let string = numbers.toString().split(',').join('')
    // variable to store area code
    let areaCode = string.slice(0,3)
    // variable to store first three digits
    let firstThree = string.slice(3,6)
    // variable to store last four digits
    let lastFour = string.slice(6,10)

    // string of template literals to return result
    return `(${areaCode}) ${firstThree}-${lastFour}`
}
