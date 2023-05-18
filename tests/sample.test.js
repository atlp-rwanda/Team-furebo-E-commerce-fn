const sum = require('./sample')

test('property that adds two numbers', () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(2, 2)).not.toBe(3)
})