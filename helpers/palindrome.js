/*
** Finds the next closest integer palindrome from string n
*/

const { checkIsNumber } = require('./checkIsNumber');
const { 
    findUpperPalindrome,
    findLowerPalindrome, 
    checkPalindrome,
 } = require('./findPalindrome');
 
const { testUpperPalindrome, testLowerPalindrome } = require('./__test__/testAlgorithm');

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
                highPalindrome = findUpperPalindrome(addNewNumber.toString());
                lowPalindrome = findLowerPalindrome(minusNewNumber.toString());  
            } else {
                highPalindrome = testUpperPalindrome(addNewNumber.toString());
                lowPalindrome = testLowerPalindrome(minusNewNumber.toString());
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