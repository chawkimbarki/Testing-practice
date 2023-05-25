const stringLength = require('../modules/functions/stringLength.js')

it("Check length(1)", () => {
    testString = "test"
    expect(stringLength(testString)).toBe(4)
})
it("Check length(2)", () => {
    testString = ""
    expect(stringLength(testString)).toBe(0)
})
it("Check length(3)", () => {
    testString = "te"
    expect(stringLength(testString)).toBe(2)
})
it("Check length(4)", () => {
    testString = "testtest "
    expect(stringLength(testString)).toBe(9)
})