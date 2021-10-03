const { checkIsNumber } = require('./helpers/checkIsNumber');

function palindrome(n) {
    console.log(checkIsNumber(n));
// Check if the value is a palindrome
    // If n <= 10
        // return (n - 1).toString()
    // If n <= 16
        // return "9"
    // Apply palindrome check algorithm
        // If n is already a palindrome (first check)
            // Get # of decimal points and add and minus 1 to mid point; create 2 new variables to check
                // n += 10 ** (n.length / 2)
                // n -= 10 ** (n.length / 2)
        // Apply recursive function for a forward and backward count to find next high and low palindrome
            // Work outwards in, compare if they match
                // if it matches, move to next digits
                // if it doesn't...
                    // TODO / Solve
        // compare high and low palindrome to n
        // return whichever palindrome has less 
    return n
}


// palindrome("123");


function addPalindrome(nbr, mid, length) {
    for (let i = 0; i < mid; i++) {
        if (nbr[i] !== nbr[length - i - 1]) {
            const newNbr = (parseInt(nbr) + (10 ** i)).toString();
            if (checkPalindrome(newNbr, mid)) return newNbr;
            return addPalindrome(newNbr, mid, length);
        }
    }
    return nbr;
}

function minusPalindrome(nbr, mid, length) {
    for (let i = 0; i < mid; i++) {
        if (nbr[i] !== nbr[length - i - 1]) {
            const newNbr = (parseInt(nbr) - (10 ** i)).toString();
            if (checkPalindrome(newNbr, mid)) return newNbr;
            return minusPalindrome(newNbr, mid, length);
        }
    }
    return nbr;
}

function checkPalindrome(n, mid) {
    let nLen = n.length;
    for (let i = 0; i < mid; i++) {
        if (n[i] !== n[nLen - i - 1]) return false;
    }
    return true;
}

console.log(`addFinal: ${addPalindrome("0",0, 1)}`);
console.log(`minusFinal: ${minusPalindrome("0", 0,1)}`);