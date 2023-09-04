/* eslint-disable no-undef */
const { D } = require('../src/index');

describe('D Class Tests', () => {
  it('should return the correct full year', () => {
    // Create a Date object for January 2, 2023
    const d = new D(2023, 0, 2, 3, 4, 5);
    // Expect the year to be 2023
    expect(d.year).toBe(2023);
  });

  it('should return the correct short year', () => {
    // Create a Date object for January 2, 2023
    const d = new D(2023, 0, 2, 3, 4, 5);
    // Expect the short year to be 23
    expect(d.yr).toBe(23);
  });

  it('should return the correct full month', () => {
    // Create a Date object for January 2, 2023
    const d = new D(2023, 0, 2, 3, 4, 5);
    // Expect the full month name to be 'January'
    expect(d.month).toBe('January');
  });

  it('should return the correct short month', () => {
    // Create a Date object for January 2, 2023
    const d = new D(2023, 0, 2, 3, 4, 5);
    // Expect the short month name to be 'Jan'
    expect(d.mon).toBe('Jan');
  });

  it('should return the correct full day', () => {
    // Create a Date object for January 2, 2023 (a Monday)
    const d = new D(2023, 0, 2, 3, 4, 5);
    // Expect the full day name to be 'Monday'
    expect(d.day).toBe('Monday');
  });

  it('should return the correct short day', () => {
    // Create a Date object for January 2, 2023 (a Monday)
    const d = new D(2023, 0, 2, 3, 4, 5);
    // Expect the short day name to be 'Mon'
    expect(d.dy).toBe('Mon');
  });

  it('should return the correct date', () => {
    // Create a Date object for January 2, 2023
    const d = new D(2023, 0, 2, 3, 4, 5);
    // Expect the date to be 2
    expect(d.date).toBe(2);
  });

  it('should return the correct hours', () => {
    // Create a Date object for January 2, 2023
    const d = new D(2023, 0, 2, 3, 4, 5);
    // Expect the hours to be 3
    expect(d.hours).toBe(3);
  });

  it('should return the correct minutes', () => {
    // Create a Date object for January 2, 2023
    const d = new D(2023, 0, 2, 3, 4, 5);
    // Expect the minutes to be 4
    expect(d.mins).toBe(4);
  });

  it('should return the correct seconds', () => {
    // Create a Date object for January 2, 2023
    const d = new D(2023, 0, 2, 3, 4, 5);
    // Expect the seconds to be 5
    expect(d.seconds).toBe(5);
  });

  it('should format the date correctly with default mask', () => {
    // Create a Date object for January 2, 2023
    const d = new D(2023, 0, 2, 3, 4, 5);
    // Expect the formatted date to be '2023 January 02'
    expect(d.format()).toBe('2023 January 02');
  });

  it('should format the date correctly with custom mask', () => {
    // Create a Date object for January 2, 2023
    const d = new D(2023, 0, 2, 3, 4, 5);
    // Expect the formatted date to be '23/Jan/2' with the mask
    expect(d.format('y/m/d')).toBe('23/Jan/2');
  });

  it('should describe when the date is in the past', () => {
    // Create a Date object for January 2, 2022
    const d = new D(2022, 0, 2, 3, 4, 5);
    // Expect the description to be '1 year ago'
    expect(d.when()).toBe('1 year ago');
  });

  it('should describe when the date is in the future', () => {
    // Create a Date object for January 2, 2024
    const d = new D(2024, 0, 2, 3, 4, 5);
    // Expect the description to be '3 months from now'
    expect(d.when()).toBe('3 months from now');
  });

  it('should describe when the date is today', () => {
    // Create a Date object for the current date and time
    const d = new D();
    // Expect the description to be 'today'
    expect(d.when()).toBe('today');
  });
});
