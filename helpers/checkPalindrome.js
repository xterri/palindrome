/*
 * Check if the given value is a palindrome
 *
 * @param {String} nbr
*/
function checkPalindrome(nbr) {
    try {
        return nbr === nbr.split('').reverse().join('');
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    checkPalindrome
}