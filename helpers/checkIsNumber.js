/*
** Check the string n is a valid number and integer
*/

function checkIsNumber(n) {
    if (n < 0) return null;
    if (n > Number.MAX_SAFE_INTEGER) return "Error: Value exceeds MAX/MIN integer";
    if (typeof n === 'number') n = n.toString();
    if (n.includes('.')) return "Error: Value contains a decimal point";
    if (n[0] === '+') n = n.substring(1);
    n = n.replace(/[\s\,]/g,'');

    if (!n.match(/^\d+$/)) return "Error: Value contains characters / symbols"; 

    return n;
}

module.exports = {
    checkIsNumber
}