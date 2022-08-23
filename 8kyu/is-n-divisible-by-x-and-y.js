// Is N Divisible by X and Y?

// DESCRIPTION:
// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

// SOLUTION:
function isDivisible(n,x,y){
    return (n % x === 0 && n % y === 0) ? true : false
}