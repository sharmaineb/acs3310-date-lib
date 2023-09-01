const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
'September', 'October', 'November', 'December']
const mons = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
'Sep', 'Oct', 'Nov', 'Dec']
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
'Friday', 'Saturday']
const dys = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu',
'Fri', 'Sat']

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