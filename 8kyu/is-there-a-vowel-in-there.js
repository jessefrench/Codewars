// Is There a Vowel in There?

// DESCRIPTION:
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u). If they are, change the array value to a string of that vowel. Return the resulting array.

// SOLUTION:
function isVow(a){
    for (let i = 0, l = a.length; i < l; i++){
      let char = String.fromCharCode(a[i])
      if ('aeiou'.indexOf(char) !== -1)
        a[i] = char
    }
    return a
}