// Sum the Strings

// DESCRIPTION:
// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string).

// EXAMPLE: (Input1, Input2 --> Output)
// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"

// NOTES:
// If either input is an empty string, consider it as zero. Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1).

// SOLUTION:
function sumStr(a,b){
    return (Number(a) + Number(b)).toString()
}