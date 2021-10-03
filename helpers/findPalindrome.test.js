// addPalindrome Tests
it("should return next highest palindrome, '131' when given 123", () => {
    expect(addPalindrome("123")).toEqual("131")
});

// minusPalindrome Tests
it("should return next lowest palindrome '121' when given 123", () => {
    expect(minusPalindrome("123")).toEqual("121")
});

// checkPalindrome Tests
it("should return true when given the number 1221", () => {
    expect(checkPalindrome("1221")).toEqual(true)
});

it("should return false when given the number 1321", () => {
    expect(checkPalindrome("1321")).toEqual(false)
});


// Apply recursive function for a forward and backward count to find next high and low palindrome
function addPalindrome(nbr) {
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
    return nbr;
}

function minusPalindrome(nbr) {
    const length = nbr.length;
    const mid = Math.floor(length / 2);

    // check if value provided is > 0
        // can't return null, 0 or -nbr; will be considered lowest value
    if (parseInt(nbr) < 0) return null
    for (let i = 0; i < mid; i++) {
        if (nbr[i] !== nbr[length - i - 1]) {
            const newNbr = (parseInt(nbr) - (10 ** i)).toString();
            if (checkPalindrome(newNbr)) return newNbr;
            return minusPalindrome(newNbr);
        }
    }
    return nbr;
}

function checkPalindrome(nbr) {
    // keep nLen in case change length from original (ex. double to single)
    const length = nbr.length;
    const mid = Math.floor(length / 2);

    for (let i = 0; i < mid; i++) {
        if (nbr[i] !== nbr[length - i - 1]) return false;
    }
    return true;
    // return nbr === nbr.split('').reverse().join('');
}
