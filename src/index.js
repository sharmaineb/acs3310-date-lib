const { months, mons, days, dys } = require('./utils')

class D {
  constructor(...args) {
    this.date = new Date(...args)
  }

  get year() {
    return this.date.getFullYear()
  }

  get yr() {
    return this.date.getFullYear() % 100
  }

  get month() {
    return months[this.date.getMonth()]
  }

  get mon() {
    return mons[this.date.getMonth()]
  }

  get day() {
    return days[this.date.getDay]
  }

  get dy() {
    return dys[this.date.getDay]
  }
}

module.exports = D