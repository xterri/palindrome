it("should return 'error' when given the number 1.23", () => {
    expect(checkIsNumber("1.23")).toEqual("Error1: Value entered is not an integer")
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
    expect(checkIsNumber("12a34b56c89")).toEqual("Error2: Value entered is not an integer")
});

it("should return 'error' when given the number 123456e89", () => {
    expect(checkIsNumber("123456e89")).toEqual("Error2: Value entered is not an integer")
});

// Check that string n is an integer
function checkIsNumber(n) {
    if (n.includes('.')) return "Error1: Value entered is not an integer";
    if (n[0].match(/[\+]/)) n = n.substring(1);
    n = n.replace(/[\s\,]/g,'').trim();

    if (parseInt(n) < 0) return '0';
    if (!n.match(/^\d+$/)) return "Error2: Value entered is not an integer"; 

    return parseInt(n).toString();
}