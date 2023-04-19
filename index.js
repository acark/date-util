



class DateUtil extends Date {
    constructor(...args) {
      super(...args);
    }

    startOfDay() {
        return new DateUtil(this.getFullYear(), this.getMonth(), this.getDate());
    }

    endOfDay() {
        return new DateUtil(this.getFullYear(), this.getMonth(), this.getDate(), 23, 59, 59, 999);
    }

    
    isLeapYear() {
        const year = this.getFullYear();
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // returns the days in month for the created date object
    daysInMonth() {
        const month = this.getMonth();
        const year = this.getFullYear();
        return new Date(year, month + 1, 0).getDate();
    }

    // compares two dates 
    isSameDayWith(date) {

        if(!(date instanceof Date) || !(date instanceof DateUtil)){
            throw new Error(`${date} given date object is not valid. Please give an instance of built-in Date object or DateUtil object.`)
        }

        return this.getFullYear() === date.getFullYear() &&
               this.getMonth() === date.getMonth() &&
               this.getDate() === date.getDate();
    }
    
    // returns True if the created date is today
    isToday() {
        const today = new DateUtil();
        return this.isSameDayWith(today);
    }

    // returns MySQL Date string
    toMySQLDateString() {
        return this.getUTCFullYear() + "-" + (this.getUTCMonth() + 1) + "-" + this.getUTCDate();
    }

    // returns MySQL DateTime string
    toMySQLDateTimeString() {
        return this.toISOString().slice(0, 19).replace('T', ' ');
    }

    // returns a date range for today for example : "created_at BETWEEN '2023-04-01' AND '2023-04-01'"
    dateRangeForToday(columnName) {
        const startOfDayDate = this.startOfDay().toMySQLDateString();
        const endOfDayDate = this.endOfDay().toMySQLDateString();
        return `${columnName} BETWEEN '${startOfDayDate}' AND '${endOfDayDate}'`;
    }

    // takes a new date as an input and returns the relative time respect to now.
    relativeTime(date) {

        if(!(date instanceof Date) || !(date instanceof DateUtil)){
            throw new Error(`${date} given date object is not valid. Please give an instance of built-in Date object or DateUtil object.`)
        }

        const now = new Date();
        const msPerMinute = 60 * 1000;
        const msPerHour = msPerMinute * 60;
        const msPerDay = msPerHour * 24;
        const msPerMonth = msPerDay * 30;
        const msPerYear = msPerDay * 365;
      
        const elapsed = now - date;
      
        if (elapsed < msPerMinute) {
          return Math.round(elapsed / 1000) + ' seconds ago';
        } else if (elapsed < msPerHour) {
          return Math.round(elapsed / msPerMinute) + ' minutes ago';
        } else if (elapsed < msPerDay) {
          return Math.round(elapsed / msPerHour) + ' hours ago';
        } else if (elapsed < msPerMonth) {
          return Math.round(elapsed / msPerDay) + ' days ago';
        } else if (elapsed < msPerYear) {
          return Math.round(elapsed / msPerMonth) + ' months ago';
        } else {
          return Math.round(elapsed / msPerYear) + ' years ago';
        }
    }

    isWeekend() {
        const dayOfWeek = this.getDay();
        return dayOfWeek === 0 || dayOfWeek === 6;
    }

    isWeekday() {
        return !this.isWeekend();
    }

    // returns the difference as a day
    differenceInDays(date) {

        if(!(date instanceof Date) || !(date instanceof DateUtil)){
            throw new Error(`${date} given date object is not valid. Please give an instance of built-in Date object or DateUtil object.`)
        }

        const msPerDay = 24 * 60 * 60 * 1000;
        const date1 = this.startOfDay();
        const date2 = date.startOfDay();
        return Math.round((date2 - date1) / msPerDay);
    }

    // checks two dates are in the same month
    isSameMonth(date) {
        
        if(!(date instanceof Date) || !(date instanceof DateUtil)){
            throw new Error(`${date} given date object is not valid. Please give an instance of built-in Date object or DateUtil object.`)
        }

        return this.getFullYear() === date.getFullYear() && this.getMonth() === date.getMonth();
    }

    // DATE MANUPILATION
    // addMilliseconds(milliseconds) {
    //     const result = new DateUtil(this);
    //     result.setMilliseconds(this.getMilliseconds() + milliseconds);
    //     return result;
    // }

    addSeconds(seconds) {
        const result = new DateUtil(this);
        result.setSeconds(this.getSeconds() + seconds);
        return result;
    }

    addMinutes(minutes) {
        const result = new DateUtil(this);
        result.setMinutes(this.getMinutes() + minutes);
        return result;
    }

    addHours(hours) {
        const result = new DateUtil(this);
        result.setHours(this.getHours() + hours);
        return result;
    }

    addDays(days) {
        const result = new DateUtil(this);
        result.setDate(this.getDate() + days);
        return result;
    }

    addMonths(months) {

        const result = new DateUtil(this);
        const currentMonth = this.getMonth()
        result.setMonth(currentMonth + months);
        return result;
    } 

    addYears(years) {
        const result = new DateUtil(this);
        result.setFullYear(this.getFullYear() + years);
        return result;
    }

}

const d = new DateUtil("1997-08-23");
console.log(d);

console.log(d instanceof Object);
console.log(d.relativeTime("23/08/1997"))
//const c = new Date("08/23/1997");
//console.log(d.isSameDayWith(c))        // TODO : check isSameDayWith func... check with typeof operator 

//module.exports = DateUtil;