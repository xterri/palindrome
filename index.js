const { checkIsNumber } = require('./helpers/checkIsNumber');
const { addPalindrome, minusPalindrome, checkPalindrome } = require('./helpers/findPalindrome');

function palindrome(n) {
     const number = checkIsNumber(n);
    
    if (number && !number.includes('Error')) {
        const mid = Math.floor(number.length / 2);
        let highPalindrome, lowPalindrome;

        if (checkPalindrome(number)) {
            if (number <= 11) {
                highPalindrome = addPalindrome((parseInt(number) + 1).toString());
                lowPalindrome = minusPalindrome((parseInt(number) - 1).toString());
            } else {
                highPalindrome = addPalindrome((parseInt(number) + (10 ** mid)).toString());
                lowPalindrome = minusPalindrome((parseInt(number) - (10 ** mid)).toString());
            }
        } else {
            highPalindrome = addPalindrome(number);
            lowPalindrome = minusPalindrome(number);  
        }

        return lowPalindrome ? 
            (highPalindrome - number) < (number - lowPalindrome) ? 
            highPalindrome : lowPalindrome 
            : highPalindrome;    
    }
    return number;
}

console.log(palindrome(99))