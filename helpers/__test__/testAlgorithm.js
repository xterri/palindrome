const { checkPalindrome } = require('../findPalindrome');

/*
 * Finds the next highest integer palindrome from the given value
 *
 * @param {String} nbr
*/
function testUpperPalindrome(nbr) {
    try {
        if (nbr > Number.MAX_SAFE_INTEGER) return null;

        const length = nbr.length;
        const mid = Math.floor(length / 2);
        let newNbr = parseInt(nbr);
    
        for (let i = 0; i < mid; i++) {
            let headNumber = parseInt(nbr[i]), tailNumber = parseInt(nbr[length - i - 1]);
            if (headNumber !== tailNumber) {
                if (headNumber < tailNumber) headNumber += 10
                newNbr = (newNbr + (headNumber - tailNumber) * (10 ** i)).toString();
                if (checkPalindrome(newNbr)) return newNbr;
                return testUpperPalindrome(newNbr);
            }
        }
        return nbr;
    } catch (error) {
        console.error(error);
    }
}

/*
 * Finds the next lowest integer palindrome from the given value
 *
 * @param {String} nbr
*/
function testLowerPalindrome(nbr) {
    try {
        if (nbr < 0) return null;

        const length = nbr.length;
        const mid = Math.floor(length / 2);
        let newNbr = parseInt(nbr);
    
        for (let i = 0; i < mid; i++) {
            let headNumber = parseInt(nbr[i]), tailNumber = parseInt(nbr[length - i - 1]);
            if (headNumber !== tailNumber) {
                if (headNumber > tailNumber) tailNumber += 10
                newNbr = (newNbr + (headNumber - tailNumber) * (10 ** i)).toString();
                if (checkPalindrome(newNbr)) return newNbr;
                return testLowerPalindrome(newNbr);
            }
        }
        return nbr;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    testUpperPalindrome,
    testLowerPalindrome
}