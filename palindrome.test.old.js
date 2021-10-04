// Tests
it("should return 1 when given the number 0", () => {
    expect(palindrome("0")).toEqual("1")
});

it("should return 0 when given the number 1", () => {
    expect(palindrome("1")).toEqual("0")
});

it("should return 4 when given the number 5", () => {
    expect(palindrome("5")).toEqual("4")
});

it("should return 9 when given the number 10", () => {
    expect(palindrome("10")).toEqual("9")
});

it("should return '121' when given the number 0123", () => {
    expect(palindrome("0123")).toEqual("121")
});

it("should return '121' when given the number +0123", () => {
    expect(palindrome("+0123")).toEqual("121")
});

it("should return 123454321 when given the number 12 34567 89", () => {
    expect(palindrome("12 34567 89")).toEqual('123454321')
});

it("should return 123454321 when given the number 123 456 789", () => {
    expect(palindrome("123 456 789")).toEqual('123454321')
});

it("should return 123454321 when given the number 123,456,789", () => {
    expect(palindrome("123,456,789")).toEqual('123454321')
});

const { checkIsNumber } = require('./helpers/checkIsNumber');
const { addPalindrome, minusPalindrome, checkPalindrome } = require('./helpers/findPalindrome');

function palindrome(n) {
// Confirm / convert n to string if not entered in as a string
    const numberString = checkIsNumber(n);
    
    // continue if number returned contains value & does not contain "Error"
    if (numberString && !numberString.includes('Error')) {
        let addNewNumber = minusNewNumber = parseInt(numberString);

        // initial check if number given is already a palindrome
        if (checkPalindrome(numberString)) {
            // if any value <= 900, add only 1 to the numberValue to avoid overshooting and missing any palindromes
            if (numberString.length < 4) {
                addNewNumber += 1;
                minusNewNumber -= 1;
            } else {
                addNewNumber += 11;
                minusNewNumber -= 11;
            }
        } 

        const highPalindrome = addPalindrome(addNewNumber.toString());
        const lowPalindrome = minusPalindrome(minusNewNumber.toString());  

        // check if lowPalindrome returns null; will read '0' because it's a string
        // if lowPalindrome is true, compare high and low palindrome to n; return whichever palindrome has less 
            // else return highPalindrome
        return lowPalindrome ? 
            (highPalindrome - numberString) < (numberString - lowPalindrome) ? 
            highPalindrome : lowPalindrome 
            : highPalindrome;
    }

    // return error msgs / null 
    return numberString;
}
