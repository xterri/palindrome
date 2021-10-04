/*
** Finds the next closest integer palindrome from string n
*/

const { checkIsNumber } = require('./helpers/checkIsNumber');
const { addPalindrome, minusPalindrome, checkPalindrome } = require('./helpers/findPalindrome');

function palindrome(n) {
    const numberString = checkIsNumber(n);
    
    if (numberString && !numberString.includes('Error')) {
        let addNewNumber = minusNewNumber = parseInt(numberString);

        if (checkPalindrome(numberString)) {
            addNewNumber += 1;
            minusNewNumber -= 1;
        }

        const highPalindrome = addPalindrome(addNewNumber.toString());
        const lowPalindrome = minusPalindrome(minusNewNumber.toString());  

        return lowPalindrome ? 
            (highPalindrome - numberString) < (numberString - lowPalindrome) ? 
            highPalindrome : lowPalindrome 
            : highPalindrome;    
    }
    return numberString;
}

module.exports = {
    palindrome
}