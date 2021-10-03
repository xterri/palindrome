/*
** Check the string n is a valid number and integer
*/

function checkIsNumber(n) {
    if (typeof n === 'number') n = n.toString();
    if (n.includes('.')) return "Error: Value contains a decimal point";
    if (n[0].includes('+')) n = n.substring(1);
    n = n.replace(/[\s\,]/g,'');

    if (parseInt(n) < 0) return null;
    if (!n.match(/^\d+$/)) return "Error: Value contains characters / symbols"; 

    return n;
}

module.exports = {
    checkIsNumber
}