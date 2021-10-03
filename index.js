const { checkIsNumber } = require('./helpers/checkIsNumber');
const { addPalindrome, minusPalindrome, checkPalindrome } = require('./helpers/findPalindrome');

function palindrome(n) {
     const number = checkIsNumber(n);
    
    if (number && !number.includes('Error')) {
        const mid = Math.floor(number.length / 2);
        let highPalindrome, lowPalindrome;

        if (checkPalindrome(number, mid)) {
            if (number <= 11) {
                highPalindrome = addPalindrome((parseInt(number) + 1).toString(), mid, length);
                lowPalindrome = minusPalindrome((parseInt(number) - 1).toString(), mid, length);
            } else {
                highPalindrome = addPalindrome((parseInt(number) + (10 ** mid)).toString(), mid, length);
                lowPalindrome = minusPalindrome((parseInt(number) - (10 ** mid)).toString(), mid, length);
            }
        } else {
            highPalindrome = addPalindrome(number, mid, length);
            lowPalindrome = minusPalindrome(number, mid, length);  
        }

        return (highPalindrome - number) < (number - lowPalindrome) ? highPalindrome : lowPalindrome;
    }
    return number;
}

console.log(palindrome(99))