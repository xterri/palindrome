const { checkPalindrome } = require('./checkPalindrome');

/*
 * Finds the next highest integer palindrome from the given value
 *
 * @param {String} nbr
*/
function findUpperPalindromeA(nbr) {
    try {
        if (nbr > Number.MAX_SAFE_INTEGER) return null;

        const length = nbr.length;
        const mid = Math.floor(length / 2);

        for (let i = 0; i < mid; i++) {
            if (nbr[i] !== nbr[length - i - 1]) {
                const newNbr = (parseInt(nbr) + (10 ** i)).toString();
                if (checkPalindrome(newNbr)) return newNbr;
                return findUpperPalindromeA(newNbr);
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
function findLowerPalindromeA(nbr) {
    try {
        if (nbr < 0) return null;

        const length = nbr.length;
        const mid = Math.floor(length / 2);
    
        for (let i = 0; i < mid; i++) {
            if (nbr[i] !== nbr[length - i - 1]) {
                const newNbr = (parseInt(nbr) - (10 ** i)).toString();
                if (checkPalindrome(newNbr)) return newNbr;
                return findLowerPalindromeA(newNbr);
            }
        }
        return nbr;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    findUpperPalindromeA,
    findLowerPalindromeA,
}