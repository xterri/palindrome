/*
** Finds the next closest integer palindrome from string n
*/

const { checkIsNumber } = require('./checkIsNumber');
const { addPalindrome, minusPalindrome, checkPalindrome } = require('./findPalindrome');

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

        if (lowPalindrome && highPalindrome) 
            return (highPalindrome - numberString) < (numberString - lowPalindrome) ? highPalindrome : lowPalindrome;
        return lowPalindrome || highPalindrome;   
    }
    return numberString;
}

module.exports = {
    palindrome
}