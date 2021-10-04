const { checkIsNumber } = require('../helpers/checkIsNumber');
const { findUpperPalindrome, findLowerPalindrome, checkPalindrome } = require('../helpers/findPalindrome');

function palindrome(n) {
// Confirm / convert n to string if not entered in as a string
    const numberString = checkIsNumber(n);
    
    // continue if number returned contains value & does not contain "Error"
    if (numberString && !numberString.includes('Error')) {
        let addNewNumber = minusNewNumber = parseInt(numberString);

        // initial check if number given is already a palindrome
        if (checkPalindrome(numberString)) {
            // get new values to find next highest and lowest palindrome
            addNewNumber += 1;
            minusNewNumber -= 1;
        } 

        const highPalindrome = findUpperPalindrome(addNewNumber.toString());
        const lowPalindrome = findLowerPalindrome(minusNewNumber.toString());  

        // if both low and high is not empty
        if (lowPalindrome && highPalindrome)
        // compare high and low palindrome to n; return whichever palindrome is lesser
            return (highPalindrome - numberString) < (numberString - lowPalindrome) ? highPalindrome : lowPalindrome;
        
        // check if low or high returns null; will read '0' because it's a string
        // whichever has a value or considered 'true' will be returned
        return lowPalindrome || highPalindrome; 
    }

    // return error msgs / null 
    return numberString;
}