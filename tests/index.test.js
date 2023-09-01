const D = require('../src/index')

const today = new Date()
const d = new D(today)
const bDay = new D(1965, 8, 26)

test('D.year', () => {
    expect(d.year).toBe(today.getFullYear())
    expect(bDay.year).toBe(1965)
})

test('D.yr', () => {
    expect(d.yr).toBe(today.getFullYear() % 100)
    expect(bDay.year).toBe(1965)
})

test('D.month', () => {
    expect(bDay.month).toBe('September')
})

test('D.mon', () => {
    expect(bDay.mon).toBe('Sep')
})

