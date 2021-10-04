// Apply recursive function for a forward and backward count to find next high and low palindrome
function addPalindrome(nbr) {
    if (nbr > Number.MAX_SAFE_INTEGER) return null;

    const length = nbr.length;
    const mid = Math.floor(length / 2);

    // Work outwards in, compare if they match
    for (let i = 0; i < mid; i++) {
        if (nbr[i] !== nbr[length - i - 1]) {
        // if it doesn't, + / - to the number and repeat
            const newNbr = (parseInt(nbr) + (10 ** i)).toString();
            if (checkPalindrome(newNbr)) return newNbr;
            return addPalindrome(newNbr);
        }
        // if it matches, move to next digits
    }
    // what to return? null? nbr? 
    return nbr;
}

function minusPalindrome(nbr) {
    // check if value provided is > 0
        // can't return null, 0 or -nbr; will be considered lowest value
    if (nbr < 0) return null; 

    const length = nbr.length;
    const mid = Math.floor(length / 2);

    for (let i = 0; i < mid; i++) {
        if (nbr[i] !== nbr[length - i - 1]) {
            const newNbr = (parseInt(nbr) - (10 ** i)).toString();
            if (checkPalindrome(newNbr)) return newNbr;
            return minusPalindrome(newNbr);
        }
    }
    return nbr;
}

// TODO: Can you combine addPalindrome and minusPalindrome in one function for recursion?

function checkPalindrome(nbr) {
    return nbr === nbr.split('').reverse().join('');
    
    /*
    // keep length in case nbr length changes from original (ex. 99 > 101)
    const length = nbr.length;
    const mid = Math.floor(length / 2);

    for (let i = 0; i < mid; i++) {
        if (nbr[i] !== nbr[length - i - 1]) return false;
    }
    return true;
    */
}