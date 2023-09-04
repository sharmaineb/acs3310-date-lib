/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'];
const mons = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
  'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
  'Friday', 'Saturday'];
const dys = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/**
 * @class D
 * A simple date manipulation class.
 * @param {...*} args - Arguments to initialize the Date object.
 */
class D {
  /**
   * Create a new D instance.
   * @param {...*} args - Arguments to initialize the Date object.
   */
  constructor(...args) {
    this._date = new Date(...args);
  }

  /**
   * Get the year of the date.
   * @returns {number} The year.
   */
  get year() {
    return this._date.getFullYear();
  }

  /**
   * Get the year (last two digits) of the date.
   * @returns {number} The year (last two digits).
   */
  get yr() {
    return this._date.getFullYear() % 100;
  }

  /**
   * Get the full month name of the date.
   * @returns {string} The full month name.
   */
  get month() {
    return months[this._date.getMonth()];
  }

  /**
   * Get the abbreviated month name of the date.
   * @returns {string} The abbreviated month name.
   */
  get mon() {
    return mons[this._date.getMonth()];
  }

  /**
   * Get the full day name of the date.
   * @returns {string} The full day name.
   */
  get day() {
    return days[this._date.getDay()];
  }

  /**
   * Get the abbreviated day name of the date.
   * @returns {string} The abbreviated day name.
   */
  get dy() {
    return dys[this._date.getDay()];
  }

  /** Get the day of the month
   *  @returns {number} The Day of the month
   */
  get date() {
    return this._date.getDate();
  }

  /** Get the hour of the day
   *  @returns {number} hour
   */
  get hours() {
    return this._date.getHours();
  }

  /** Get the minute
   *  @returns {number} minute
   */
  get mins() {
    return this._date.getMinutes();
  }

  /** Get the seconds
   *  @returns {number} seconds
   */
  get seconds() {
    return this._date.getSeconds();
  }

  // Challenge 3
  /**
   * Formats the date object according to the specified mask.
   *
   // eslint-disable-next-line max-len
   * @param {string} [mask='Y M D'] - The mask to format the date. The mask can contain formatting characters:
   *   - 'Y' -> Full year (ex., 2023)
   *   - 'y' -> Short year (ex., 23)
   *   - 'M' -> Full month name (ex., January)
   *   - 'm' -> Short month name (ex., Jan)
   *   - 'D' -> Padded day (ex., 01)
   *   - 'd' -> Day (ex., 1)
   *   - 'L' -> Full day of the week (ex., Monday)
   *   - 'l' -> Short day of the week (ex., Mon)
   *   - '#' -> Day with ordinal suffix (ex., 1st, 2nd, 3rd, 4th)
   *   - 'H' -> Padded hours (ex., 05)
   *   - 'h' -> Hours (ex., 5)
   *   - 'I' -> Padded minutes (ex., 08)
   *   - 'i' -> Minutes (ex., 8)
   *   - 'S' -> Padded seconds (ex., 04)
   *   - 's' -> Seconds (ex., 4)
   * @returns {string} The formatted date string.
   */
  format(mask = 'Y M D') {
    let result = '';
    for (const char of mask) {
      switch (char) {
        case 'Y':
          result += this.year;
          break;
        case 'y':
          result += this.yr;
          break;
        case 'M':
          result += this.month;
          break;
        case 'm':
          result += this.mon;
          break;
        case 'D':
          result += String(this.date).padStart(2, '0');
          break;
        case 'd':
          result += this.date;
          break;
        case '#':
          result += String(this.date) + this.getOrdinalSuffix(this.date);
          break;
        case 'L':
          result += this.day;
          break;
        case 'l':
          result += this.dy;
          break;
        case 'H':
          result += String(this.hours).padStart(2, '0');
          break;
        case 'h':
          result += this.hours;
          break;
        case 'I':
          result += String(this.mins).padStart(2, '0');
          break;
        case 'i':
          result += this.mins;
          break;
        case 'S':
          result += String(this.seconds).padStart(2, '0');
          break;
        case 's':
          result += this.seconds;
          break;
        default:
          result += char;
      }
    }
    return result;
  }

  // Challenge 4
  /**
   * Returns a description of how long ago or in the future the date is.
   * @returns {string} Time difference.
   */
  when() {
    // Get the current date and time
    const currentDate = new Date();

    // Calculate the time difference between the saved date and the current date
    const timeDifference = this._date - currentDate;

    // Calculate time differences in different units
    const absoluteTimeDifference = Math.abs(timeDifference);
    const secondsDifference = absoluteTimeDifference / 1000;
    const minutesDifference = secondsDifference / 60;
    const hoursDifference = minutesDifference / 60;
    const daysDifference = Math.floor(hoursDifference / 24);
    const monthsDifference = Math.floor(daysDifference / 30.44);
    const yearsDifference = Math.floor(daysDifference / 365.25);

    // The description based on the time difference
    if (daysDifference === 0) return 'today';
    if (yearsDifference > 0) {
      return `${yearsDifference} year${yearsDifference > 1 ? 's' : ''} ${
        timeDifference < 0 ? 'ago' : 'from now'
      }`;
    }
    if (monthsDifference > 0) {
      return `${monthsDifference} month${monthsDifference > 1 ? 's' : ''} ${
        timeDifference < 0 ? 'ago' : 'from now'
      }`;
    }
    if (daysDifference > 0) {
      return `${daysDifference} day${daysDifference > 1 ? 's' : ''} ${
        timeDifference < 0 ? 'ago' : 'from now'
      }`;
    }
    if (hoursDifference > 0) {
      return `${hoursDifference} hour${hoursDifference > 1 ? 's' : ''} ${
        timeDifference < 0 ? 'ago' : 'from now'
      }`;
    }
    if (minutesDifference > 0) {
      return `${minutesDifference} minute${minutesDifference > 1 ? 's' : ''} ${
        timeDifference < 0 ? 'ago' : 'from now'
      }`;
    }
    return `${secondsDifference} second${secondsDifference > 1 ? 's' : ''} ${
      timeDifference < 0 ? 'ago' : 'from now'
    }`;
  }

  /**
   * Get the ordinal suffix for a number (e.g., st, nd, rd, or th).
   * @param {number} num - The number.
   * @returns {string} The ordinal suffix.
   */
  // eslint-disable-next-line class-methods-use-this
  getOrdinalSuffix(num) {
    const lastDigit = num % 10;
    if (num >= 11 && num <= 13) {
      return 'th';
    }
    switch (lastDigit) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }
}

// With no parameters:
const a = new D();
// Create a date from a string (single parameter)
const b = new D('9/26/1965');
// Create a date from some numbers (list of parameters)
const c = new D(1970, 1, 1, 0, 0, 0);
// With a Date
const d = new D(new Date());

// console log
const testing = false;
if (testing === true) {
  console.log(a.when());
  console.log(b.when());
  console.log(c.when());
  console.log(d.when());
}
console.log('~.~.~.~.~.~.~ Challenge 1 ~.~.~.~.~.~.~');
console.log(a._date);
console.log(b._date);
console.log(c._date);
console.log(d._date);

// Challenge 2
console.log('~.~.~.~.~.~.~ Challenge 2 ~.~.~.~.~.~.~');
console.log('Full year:', d.year);
console.log('Short year:', d.yr);
console.log('Full month:', d.month);
console.log('Short month:', d.mon);
console.log('Full day:', d.day);
console.log('Short day:', d.dy);
console.log('Date:', d.date);
console.log('Hour:', d.hours);
console.log('Minutes:', d.mins);
console.log('Seconds:', d.seconds);

// Challenge 3
console.log('~.~.~.~.~.~.~ Challenge 3 ~.~.~.~.~.~.~');
// const d = new D(2017, 0, 2, 3, 4, 5);
console.log(d.format());
console.log(d.format('y/m/d'));
console.log(d.format('H:I:S'));
console.log(d.format('h:i:s'));
console.log(d.format('Y-M-D h:I:S'));

// Challenge 4
console.log('~.~.~.~.~.~.~ Challenge 4 ~.~.~.~.~.~.~');
let e = new D(2023, 0, 2, 3, 4, 5);
console.log(e.when());
e = new D(2023, 9, 2, 3, 4, 5);
console.log(e.when());
e = new D(2028, 9, 2, 3, 4, 5);
console.log(e.when());
e = new D(2023, 6, 30, 3, 4, 5);
console.log(e.when());
e = new D();
console.log(e.when());

module.exports = { D };
