const D = require('../src/index')

const today = new Date()
const d = new D(today)

test('D.year', () => {
    expect(d.year).toBe(today.getFullYear())
})