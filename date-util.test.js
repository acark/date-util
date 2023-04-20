const Datex = require('./date-util');

describe('Datex', () => {
  let datex;

  beforeEach(() => {
    datex = new Datex('2023-03-29');
  });

  test('startOfDay', () => {
    const start = datex.startOfDay();
    expect(start.toISOString()).toBe('2023-03-29T00:00:00.000Z');
  });

  test('endOfDay', () => {
    const end = datex.endOfDay();
    expect(end.toISOString()).toBe('2023-03-29T23:59:59.999Z');
  });

  test('isLeapYear', () => {
    expect(datex.isLeapYear()).toBe(false);
  });

  test('daysInMonth', () => {
    expect(datex.daysInMonth()).toBe(31);
  });

  test('isSameDayWith', () => {
    const anotherDate = new Date('2023-03-29');
    expect(datex.isSameDayWith(anotherDate)).toBe(true);
  });

  test('isToday', () => {
    const today = new Date();
    expect(datex.isToday()).toBe(datex.isSameDayWith(today));
  });

  test('toMySQLDateString', () => {
    expect(datex.toMySQLDateString()).toBe('2023-03-29');
  });

  test('toMySQLDateTimeString', () => {
    expect(datex.toMySQLDateTimeString()).toBe('2023-03-29T00:00:00');
  });

  test('dateRangeForToday', () => {
    const range = datex.dateRangeForToday('created_at');
    expect(range).toBe("created_at BETWEEN '2023-03-29' AND '2023-03-29'");
  });

  test('isWeekend', () => {
    expect(datex.isWeekend()).toBe(false);
  });

  test('isWeekday', () => {
    expect(datex.isWeekday()).toBe(true);
  });

  test('differenceInDays', () => {
    const anotherDate = new Date('2023-04-04');
    expect(datex.differenceInDays(anotherDate)).toBe(6);
  });

  test('isSameMonth', () => {
    const anotherDate = new Date('2023-03-01');
    expect(datex.isSameMonth(anotherDate)).toBe(true);
  });

  test('addSeconds', () => {
    const result = datex.addSeconds(30);
    expect(result.getSeconds()).toBe(30);
  });

  test('addMinutes', () => {
    const result = datex.addMinutes(15);
    expect(result.getMinutes()).toBe(15);
  });

  test('addHours', () => {
    const result = datex.addHours(4);
    expect(result.getHours()).toBe(4);
  });

  test('addDays', () => {
    const result = datex.addDays(7);
    expect(result.getDate()).toBe(5);
  });

  test('addMonths', () => {
    const result = datex.addMonths(2);
    expect(result.getMonth()).toBe(5);
  });

  test('addYears', () => {
    const result = datex.addYears(5);
    expect(result.getFullYear()).toBe(2028);
  });

});