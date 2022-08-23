// Removing Elements

// DESCRIPTION:
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element. None of the arrays will be empty.

// SOLUTION:
function removeEveryOther(arr){
    return arr.filter((e,i) => i % 2 === 0)
}