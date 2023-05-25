const stringLength = require('../modules/functions/stringLength.js')

it("Check length", () => {
    const testString = "test"
    expect(stringLength(testString)).toBe(4)
})

it("String shouldn't be empty", () => {
    const testString = ""
    expect(stringLength(testString)).toBeGreaterThan(0)
})