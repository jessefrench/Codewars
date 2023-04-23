// Sum of Differences in Array

// DESCRIPTION:
// Your task is to sum the differences between consecutive pairs in the array in descending order.

// EXAMPLE:
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// NOTE:
// If the array is empty or the array has only one element the result should be 0.

// SOLUTION:
function sumOfDifferences(arr){
    let sorted = arr.sort((a, b) => b - a)
    let total = 0
    for (let i = 0; i < sorted.length - 1; i++){
      total += sorted[i] - sorted[i + 1]
    }
    return total
}