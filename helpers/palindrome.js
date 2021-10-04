/*
** Finds the next closest integer palindrome from string n
*/

const { checkIsNumber } = require('./checkIsNumber');
const { 
    addPalindrome,
    minusPalindrome, 
    checkPalindrome,
    bAddPalindrome,
    bMinusPalindrome
 } = require('./findPalindrome');

function palindrome(n, option = 'a') {
    const numberString = checkIsNumber(n);

    if (numberString && !numberString.includes('Error')) {
        let addNewNumber = minusNewNumber = parseInt(numberString);
        let highPalindrome, lowPalindrome;

        if (checkPalindrome(numberString)) {
            addNewNumber += 1;
            minusNewNumber -= 1;
        }

        if (option === 'a') {
            highPalindrome = addPalindrome(addNewNumber.toString());
            lowPalindrome = minusPalindrome(minusNewNumber.toString());  
        } else {
            highPalindrome = bAddPalindrome(addNewNumber.toString());
            lowPalindrome = bMinusPalindrome(minusNewNumber.toString());
        }

        if (lowPalindrome && highPalindrome) 
            return (highPalindrome - numberString) < (numberString - lowPalindrome) ? highPalindrome : lowPalindrome;
        return lowPalindrome || highPalindrome;   
    }
    return numberString;
}

module.exports = {
    palindrome
}