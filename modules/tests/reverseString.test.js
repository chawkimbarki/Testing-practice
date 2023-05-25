const reverseString = require('../functions/reverseString.js')

describe("string should be reversed", () => {
    test('the reverese of the \'test\' string should be \'tset\'', () => {
        expect(reverseString('test')).toEqual('tset')
    })
    test('the reverese of the \'hello\' string should be \'olleh\'', () => {
        expect(reverseString('hello')).toEqual('olleh')
    })
    test('the reverese of the \'hello there\' should be \'ereht olleh\'', () => {
        expect(reverseString('hello there')).toEqual('ereht olleh')
    })
})
