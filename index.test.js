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

function palindrome(n) {
// Confirm / convert n to string if not entered in as a string
    const number = checkIsNumber(n);
    
    // continue if number returned contains value & does not contain "Error"
    if (number && !number.includes('Error')) {
        const length = number.length;
        const mid = Math.floor(length / 2);
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
                highPalindrome = addPalindrome((parseInt(number) + 1).toString(), mid, length);
                lowPalindrome = minusPalindrome((parseInt(number) - 1).toString(), mid, length);
            } else {
                // +/- 1x to midpoint floor
                highPalindrome = addPalindrome((parseInt(number) + (10 ** mid)).toString(), mid, length);
                lowPalindrome = minusPalindrome((parseInt(number) - (10 ** mid)).toString(), mid, length);
            }
        } else {
            highPalindrome = addPalindrome(number, mid, length);
            lowPalindrome = minusPalindrome(number, mid, length);  
        }

        // compare high and low palindrome to n; return whichever palindrome has less 
        return (highPalindrome - number) < (number - lowPalindrome) ? highPalindrome : lowPalindrome;
    }

    // return error msgs / null 
    return number;
}
// Apply recursive function for a forward and backward count to find next high and low palindrome
function addPalindrome(nbr, mid, length) {
    // Work outwards in, compare if they match
    for (let i = 0; i < mid; i++) {
        if (nbr[i] !== nbr[length - i - 1]) {
        // if it doesn't, + / - to the number and repeat
            const newNbr = (parseInt(nbr) + (10 ** i)).toString();
            if (checkPalindrome(newNbr, mid)) return newNbr;
            return addPalindrome(newNbr, mid, length);
        }
        // if it matches, move to next digits
    }
    return nbr;
}

function minusPalindrome(nbr, mid, length) {
    // check if value provided is > 0
    if (parseInt(nbr) < 0) return '1'
    for (let i = 0; i < mid; i++) {
        if (nbr[i] !== nbr[length - i - 1]) {
            const newNbr = (parseInt(nbr) - (10 ** i)).toString();
            if (checkPalindrome(newNbr, mid)) return newNbr;
            return minusPalindrome(newNbr, mid, length);
        }
    }
    return nbr;
}

function checkPalindrome(nbr, mid) {
    // keep nLen in case change length from original (ex. double to single)
    let nLen = nbr.length;
    for (let i = 0; i < mid; i++) {
        if (nbr[i] !== nbr[nLen - i - 1]) return false;
    }
    return true;
}
