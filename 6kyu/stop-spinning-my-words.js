// Stop gninnipS My sdroW!

// DESCRIPTION:
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// EXAMPLES:
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

// SOLUTION:
function spinWords(str){
  return str.length >= 5 ?
    str
      .split(' ')
      .map((a) => (a.length >= 5 ? a.split('').reverse().join('') : a))
      .join(' ')
  : str
}