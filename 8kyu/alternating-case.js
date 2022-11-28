// altERnaTIng cAsE <=> ALTerNAtiNG CaSe

// DESCRIPTION:
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. 

// EXAMPLES:
// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

// NOTE:
// As usual, your function/method should be pure, i.e. it should not mutate the original string.

// SOLUTION:
String.prototype.toAlternatingCase = function (){
    return this.split('').map(c => c === c.toUpperCase() ? c.toLowerCase(): c.toUpperCase()).join('')
}