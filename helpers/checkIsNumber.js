/*
 * Check the string n is a valid number and integer
 *
 * @param {String} n
*/

function checkIsNumber(nbr) {
    try {
        if (nbr < 0) return null;
        if (nbr > Number.MAX_SAFE_INTEGER) return "Error: Value exceeds MAX/MIN integer";
        if (typeof nbr === 'number') nbr = nbr.toString();
        if (nbr.includes('.')) return "Error: Value contains a decimal point";
        if (nbr[0] === '+') nbr = nbr.substring(1);
        nbr = nbr.replace(/[\s\,]/g,'');

        if (!nbr.match(/^\d+$/)) return "Error: Value contains characters / symbols"; 

        return nbr;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    checkIsNumber
}