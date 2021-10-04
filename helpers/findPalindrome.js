/*
** Functions to check & find the next palindrome from given number
** Search by adding and subtracting 1x to number
** Check if new number is a palindrome, if so return the number, else continue
*/

function addPalindrome(nbr) {
    if (nbr > Number.MAX_SAFE_INTEGER) return null;

    const length = nbr.length;
    const mid = Math.floor(length / 2);

    for (let i = 0; i < mid; i++) {
        if (nbr[i] !== nbr[length - i - 1]) {
            const newNbr = (parseInt(nbr) + (10 ** i)).toString();
            if (checkPalindrome(newNbr)) return newNbr;
            return addPalindrome(newNbr);
        }
    }
    return nbr;
}

function minusPalindrome(nbr) {
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

function checkPalindrome(nbr) {
    return nbr === nbr.split('').reverse().join('');
}

module.exports = {
    addPalindrome,
    minusPalindrome,
    checkPalindrome
}