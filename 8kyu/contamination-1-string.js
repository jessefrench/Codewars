// Contamination #1 - String

// DESCRIPTION:
// An AI has infected a text with a character! This text is now fully mutated to this character. If the text or the character are empty, return an empty string. There will never be a case when both are empty as nothing is going on!

// NOTE:
// The character is a string of length 1 or an empty string.

// EXAMPLE:
// text before = "abc"
// character   = "z"
// text after  = "zzz"

// SOLUTION:
function contamination(text, char){
    if (text.length === 0 || char.length === 0) return ''
    let result = ''
    for (let i = 0; i < text.length; i++){
      result += char
    }
    return result
}