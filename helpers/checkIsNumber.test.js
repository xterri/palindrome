it("should return 'error' when given the number 1.23", () => {
    expect(checkIsNumber("1.23")).toEqual("Error: Value entered is not an integer, contains a decimal point")
});

it("should return '0' when given the number -123", () => {
    expect(checkIsNumber("-123")).toEqual("0")
});

it("should return '123' when given the number +123", () => {
    expect(checkIsNumber("+123")).toEqual("123")
});

it("should return '123' when given the number 0123", () => {
    expect(checkIsNumber("0123")).toEqual("123")
});

it("should return '123' when given the number +0123", () => {
    expect(checkIsNumber("+0123")).toEqual("123")
});

it("should return '123456789' when given the number 123,456,789", () => {
    expect(checkIsNumber("123,456,789")).toEqual("123456789")
});

it("should return '123456789' when given the number 12,34567,89", () => {
    expect(checkIsNumber("12,34567,89")).toEqual("123456789")
});

it("should return '123456789' when given the number 123 456 789", () => {
    expect(checkIsNumber("123 456 789")).toEqual("123456789")
});

it("should return 'error' when given the number 12a34b56c89", () => {
    expect(checkIsNumber("12a34b56c89")).toEqual("Error: Value entered is invalid, contains characters / symbols")
});

it("should return 'error' when given the number 123456e89", () => {
    expect(checkIsNumber("123456e89")).toEqual("Error: Value entered is invalid, contains characters / symbols")
});

it("should return 'error' when given the number Number.MAX_VALUE", () => {
    expect(checkIsNumber(Number.MAX_VALUE)).toEqual("Error: Value entered is not an integer, contains a decimal point")
});

it("should return 'error' when given the number Number.MIN_VALUE", () => {
    expect(checkIsNumber(Number.MIN_VALUE)).toEqual("Error: Value entered is invalid, contains characters / symbols")
});


// Check that string n is an integer
function checkIsNumber(n) {
    if (typeof n === 'number') n = n.toString();
    if (n.includes('.')) return "Error: Value entered is not an integer, contains a decimal point";
    if (n[0].match(/[\+]/)) n = n.substring(1);
    n = n.replace(/[\s\,]/g,'').trim();

    if (parseInt(n) < 0) return '0';
    if (!n.match(/^\d+$/)) return "Error: Value entered is invalid, contains characters / symbols"; 

    return parseInt(n).toString();
}