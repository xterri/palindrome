const { checkPalindrome } = require('./checkPalindrome');

/*
 * Finds the next highest integer palindrome from the given value
 *
 * @param {String} nbr
*/
function findUpperPalindromeB(nbr) {
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
                return findUpperPalindromeB(newNbr);
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
function findLowerPalindromeB(nbr) {
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
                return findLowerPalindromeB(newNbr);
            }
        }
        return nbr;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    findUpperPalindromeB,
    findLowerPalindromeB
}