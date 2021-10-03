// TESTS
it("should return 9 when given the number 10", () => {
    expect(palindrome("10")).toEqual("9")
});

it("should return 4 when given the number 5", () => {
    expect(palindrome("5")).toEqual("4")
});

it("should return 1 when given the number 0", () => {
    expect(palindrome("0")).toEqual("1")
});

it("should return 0 when given the number 1", () => {
    expect(palindrome("1")).toEqual("0")
});

it("should return '123' when given the number 0123", () => {
    expect(palindrome("0123")).toEqual("121")
});

it("should return '123' when given the number +0123", () => {
    expect(palindrome("+0123")).toEqual("121")
});

it("should return null when given the number -123", () => {
    expect(palindrome("-123")).toEqual(null)
});


const { checkIsNumber } = require('./helpers/checkIsNumber');
const { addPalindrome, minusPalindrome, checkPalindrome } = require('./helpers/findPalindrome');

function palindrome(n) {
// Confirm / convert n to string if not entered in as a string
    const number = checkIsNumber(n);
    
    // continue if number returned contains value & does not contain "Error"
    if (number && !number.includes('Error')) {
        // const length = number.length; // calculate length in functions as it could change
        const mid = Math.floor(number.length / 2);
        let highPalindrome, lowPalindrome;

        // initial check if number given is already a palindrome
        if (checkPalindrome(number, mid)) {
            // 0 value return 1 b/c it can't be negative
            //if (number === '0') return '1';
            // single digits, return n - 1 
                // if (number < 10) return (number - 1).toString();
            // single digits up to 11 is an exception because we need to +/-1 from it
            if (number <= 11) {
                // find the highest and lowest palindrome by adding/substracting 1x each time
                highPalindrome = addPalindrome((parseInt(number) + 1).toString());
                lowPalindrome = minusPalindrome((parseInt(number) - 1).toString());
            } else {
                // +/- 1x to midpoint floor
                highPalindrome = addPalindrome((parseInt(number) + (10 ** mid)).toString());
                lowPalindrome = minusPalindrome((parseInt(number) - (10 ** mid)).toString());
            }
        } else {
            highPalindrome = addPalindrome(number);
            lowPalindrome = minusPalindrome(number);  
        }

        console.log(`high: ${highPalindrome}\tlow: ${lowPalindrome}`);
        // check if lowPalindrome returns null; will read '0' because it's a string
        // if lowPalindrome is true, compare high and low palindrome to n; return whichever palindrome has less 
            // else return highPalindrome
        return lowPalindrome ? 
            (highPalindrome - number) < (number - lowPalindrome) ? 
            highPalindrome : lowPalindrome 
            : highPalindrome;
    }

    // return error msgs / null 
    return number;
}
