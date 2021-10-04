const { checkIsNumber } = require('./checkIsNumber');

it("should return 'error' when given the number 1.23", () => {
    expect(checkIsNumber("1.23")).toEqual("Error: Value contains a decimal point")
});

it("should return null when given the number -123", () => {
    expect(checkIsNumber("-123")).toEqual(null)
});

it("should return '123' when given the number +123", () => {
    expect(checkIsNumber("+123")).toEqual("123")
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
    expect(checkIsNumber("12a34b56c89")).toEqual("Error: Value contains characters / symbols")
});

it("should return 'error' when given the number 123456e89", () => {
    expect(checkIsNumber("123456e89")).toEqual("Error: Value exceeds MAX/MIN integer")
});

it("should return '123' when given the number 123", () => {
    expect(checkIsNumber(123)).toEqual("123")
});

it("should return 'error' when given the number Number.MAX_VALUE", () => {
    expect(checkIsNumber(Number.MAX_VALUE)).toEqual("Error: Value exceeds MAX/MIN integer")
});

it("should return 'error' when given the number Number.MIN_VALUE", () => {
    expect(checkIsNumber(Number.MIN_VALUE)).toEqual("Error: Value contains characters / symbols")
});

it("should return 'null' when given the number Number.MIN_SAFE_INTEGER", () => {
    expect(checkIsNumber(Number.MIN_SAFE_INTEGER)).toEqual(null)
});

it("should return 'error' when given the number Number.MAX_SAFE_INTEGER + 1", () => {
    expect(checkIsNumber(Number.MAX_SAFE_INTEGER + 1)).toEqual("Error: Value exceeds MAX/MIN integer")
});

it("should return '9007199254740991' when given the number Number.MAX_SAFE_INTEGER", () => {
    expect(checkIsNumber(Number.MAX_SAFE_INTEGER)).toEqual("9007199254740991")
});

it("should return 'null' when given the number Number.MIN_SAFE_INTEGER + 1", () => {
    expect(checkIsNumber(Number.MIN_SAFE_INTEGER + 1)).toEqual(null)
});