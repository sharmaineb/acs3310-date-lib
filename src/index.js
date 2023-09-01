const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
'September', 'October', 'November', 'December']
const mons = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
'Sep', 'Oct', 'Nov', 'Dec']
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
'Friday', 'Saturday']
const dys = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu',
'Fri', 'Sat']

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
    return this._date.getDate()
  }

  /** Get the hour of the day
   *  @returns {number} hour
   */
  get hours() {
    return this._date.getHours()
  }

  /** Get the minute
   *  @returns {number} minute
   */
  get mins() {
    return this._date.getMinutes()
  }

  /** Get the seconds
   *  @returns {number} seconds
   */
  get seconds() {
    return this._date.getSeconds()
  }
}

module.exports = D;
