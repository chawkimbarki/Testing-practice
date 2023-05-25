const reverseString = require('../modules/functions/reverseString.js')

it("string should be reversed", () => {
    const testString = "test"
    expect(reverseString(testString)).toEqual('tset')
})
