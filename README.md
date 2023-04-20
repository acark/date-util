# DateUtil
DateUtil is a utility class that extends JavaScript's built-in Date object, providing additional methods for date manipulation and comparison. It can be used as a drop-in replacement for the native Date object.

## Installation
```
npm install date-util
```

## Usage

```javascript
const DateUtil = require('date-util');

const d = new DateUtil();
```

## API

### Constructor

- `new DateUtil(...args)`: Creates a new DateUtil object with the same arguments as the native Date constructor.

### Instance Methods

- `startOfDay()`: Returns a new DateUtil object representing the start of the day.
* `endOfDay()`: Returns a new DateUtil object representing the end of the day.
+ `isLeapYear()`: Determines whether the current year is a leap year.
- `daysInMonth()`: Returns the number of days in the current month.
+ `isSameDayWith(date)`: Compares two dates to see if they are the same day.
* `isToday()`: Checks if the current date object represents today.
- `toMySQLDateString()`: Returns a MySQL date string.
+ `toMySQLDateTimeString()`: Returns a MySQL datetime string.
* `dateRangeForToday(columnName)`: Returns a date range string for SQL queries.
- `relativeTime(date)`: Returns the relative time between the current date object and a given date.
+ `isWeekend()`: Determines if the current date object is a weekend.
* `isWeekday()`: Determines if the current date object is a weekday.
- `differenceInDays(date)`: Calculates the difference in days between two dates.
+ `isSameMonth(date)`: Checks if two dates are in the same month.
* `addSeconds(seconds)`: Adds a specified number of seconds to the current date object.
- `addMinutes(minutes)`: Adds a specified number of minutes to the current date object.
+ `addHours(hours)`: Adds a specified number of hours to the current date object.
* `addDays(days)`: Adds a specified number of days to the current date object.
- `addMonths(months)`: Adds a specified number of months to the current date object.
+ `addYears(years)`: Adds a specified number of years to the current date object.


## Examples

```javascript
const d = new DateUtil("1997-08-23");

// Check if the date is a weekend
console.log(d.isWeekend());

// Add 3 months to the date
const newDate = d.addMonths(3);
console.log(newDate);
```
## License

MIT


