const { checkIsNumber } = require('./checkIsNumber');
const { checkPalindrome } = require('./checkPalindrome');
const { findUpperPalindromeA, findLowerPalindromeA } = require('./findPalindromeA');
const { findUpperPalindromeB, findLowerPalindromeB } = require('./findPalindromeB');

/*
 * Finds the next highest/lowest integer palindrome closest to n
 *
 * @param {String} n
 * @param {String} option - Select algorithm to run; default set to 'a'
*/
function palindrome(n, option = 'a') {
    try {
        const numberString = checkIsNumber(n);

        if (numberString && !numberString.includes('Error')) {
            let addNewNumber = minusNewNumber = parseInt(numberString);
            let highPalindrome, lowPalindrome;
    
            if (checkPalindrome(numberString)) {
                addNewNumber += 1;
                minusNewNumber -= 1;
            }
    
            if (option === 'a') {
                highPalindrome = findUpperPalindromeA(addNewNumber.toString());
                lowPalindrome = findLowerPalindromeA(minusNewNumber.toString());  
            } else {
                highPalindrome = findUpperPalindromeB(addNewNumber.toString());                
                if (minusNewNumber && minusNewNumber % 10 === 0) minusNewNumber -= 1;
                lowPalindrome = findLowerPalindromeB(minusNewNumber.toString());
            }
    
            if (lowPalindrome && highPalindrome) 
                return (highPalindrome - numberString) < (numberString - lowPalindrome) ? highPalindrome : lowPalindrome;
            return lowPalindrome || highPalindrome;   
        }
        return numberString;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    palindrome
}