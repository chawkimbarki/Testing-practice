const capitalize = require('../functions/capitalize.js')

describe("string should be capitalized", () => {
    test('capitalizing the \'test\' string should be \'Test\'', () => {
        expect(capitalize('test')).toEqual('Test')
    })
    test('capitalizing the \'hello\' string should be \'Hello\'', () => {
        expect(capitalize('hello')).toEqual('Hello')
    })
    test('capitalizing the \'hello there\' should be \'Hello there\'', () => {
        expect(capitalize('hello there')).toEqual('Hello there')
    })
})