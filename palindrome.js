/*
** Finds the next closest integer palindrome from string n
*/

const { checkIsNumber } = require('./helpers/checkIsNumber');
const { addPalindrome, minusPalindrome, checkPalindrome } = require('./helpers/findPalindrome');

function palindrome(n) {
     const number = checkIsNumber(n);
    
    if (number && !number.includes('Error')) {
        const mid = Math.floor(number.length / 2);
        let addNewNumber = number, minusNewNumber = number;

        if (checkPalindrome(number)) {
            if (number <= 11) {
                addNewNumber = parseInt(number) + 1;
                minusNewNumber = parseInt(number) - 1;
            } else {
                addNewNumber = parseInt(number) + (10 ** mid);
                minusNewNumber = parseInt(number) - (10 ** mid);
            }
        }

        const highPalindrome = addPalindrome(addNewNumber.toString());
        const lowPalindrome = minusPalindrome(minusNewNumber.toString());  
    
        return lowPalindrome ? 
            (highPalindrome - number) < (number - lowPalindrome) ? 
            highPalindrome : lowPalindrome 
            : highPalindrome;    
    }
    return number;
}


module.exports = {
    palindrome
}