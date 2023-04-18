// Grasshopper - Array Mean

// DESCRIPTION:
// Find the mean (average) of a list of numbers in an array. To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// EXAMPLE:
// List of 1, 3, 5, 7
// Add all of the numbers
// 1+3+5+7 = 16
// Divide by the number of values in the list. In this example there are 4 numbers in the list.
// 16/4 = 4
// The mean (or average) of this list is 4

// SOLUTION:
const findAverage = function(nums){
    return nums.reduce((a, b) => a + b, 0) / nums.length
}