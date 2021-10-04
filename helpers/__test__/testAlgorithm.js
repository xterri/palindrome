/*
** Find next highest and lowest Palindrome by adding/subtracting index A to index B
*/
const { checkPalindrome } = require('../findPalindrome');

function testUpperPalindrome(nbr) {
    try {
        if (nbr > Number.MAX_SAFE_INTEGER) return null;

        const length = nbr.length;
        const mid = Math.floor(length / 2);
        let newNbr = parseInt(nbr);
    
        for (let i = 0; i < mid; i++) {
            let headNumber = parseInt(nbr[i]), endNumber = parseInt(nbr[length - i - 1]);
            if (headNumber !== endNumber) {
                if (headNumber < endNumber) headNumber += 10
                newNbr = (newNbr + (headNumber - endNumber) * (10 ** i)).toString();
                if (checkPalindrome(newNbr)) return newNbr;
                return testUpperPalindrome(newNbr);
            }
        }
        return nbr;
    } catch (error) {
        console.error(error);
    }
}

function testLowerPalindrome(nbr) {
    try {
        if (nbr < 0) return null;

        const length = nbr.length;
        const mid = Math.floor(length / 2);
        let newNbr = parseInt(nbr);
    
        for (let i = 0; i < mid; i++) {
            let headNumber = parseInt(nbr[i]), endNumber = parseInt(nbr[length - i - 1]);
            if (headNumber !== endNumber) {
                if (headNumber > endNumber) endNumber += 10
                newNbr = (newNbr + (headNumber - endNumber) * (10 ** i)).toString();
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