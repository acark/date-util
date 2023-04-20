const DateUtil = require('./date-util');

describe('DateUtil', () => {
  let dateUtil;

  beforeEach(() => {
    dateUtil = new DateUtil('2023-03-29');
  });

  test('startOfDay', () => {
    const start = dateUtil.startOfDay();
    expect(start.toISOString()).toBe('2023-03-29T00:00:00.000Z');
  });

  test('endOfDay', () => {
    const end = dateUtil.endOfDay();
    expect(end.toISOString()).toBe('2023-03-29T23:59:59.999Z');
  });

  test('isLeapYear', () => {
    expect(dateUtil.isLeapYear()).toBe(false);
  });

  test('daysInMonth', () => {
    expect(dateUtil.daysInMonth()).toBe(31);
  });

  test('isSameDayWith', () => {
    const anotherDate = new Date('2023-03-29');
    expect(dateUtil.isSameDayWith(anotherDate)).toBe(true);
  });

  test('isToday', () => {
    const today = new Date();
    expect(dateUtil.isToday()).toBe(dateUtil.isSameDayWith(today));
  });

  test('toMySQLDateString', () => {
    expect(dateUtil.toMySQLDateString()).toBe('2023-03-29');
  });

  test('toMySQLDateTimeString', () => {
    expect(dateUtil.toMySQLDateTimeString()).toBe('2023-03-29T00:00:00');
  });

  test('dateRangeForToday', () => {
    const range = dateUtil.dateRangeForToday('created_at');
    expect(range).toBe("created_at BETWEEN '2023-03-29' AND '2023-03-29'");
  });

  test('isWeekend', () => {
    expect(dateUtil.isWeekend()).toBe(false);
  });

  test('isWeekday', () => {
    expect(dateUtil.isWeekday()).toBe(true);
  });

  test('differenceInDays', () => {
    const anotherDate = new Date('2023-04-04');
    expect(dateUtil.differenceInDays(anotherDate)).toBe(6);
  });

  test('isSameMonth', () => {
    const anotherDate = new Date('2023-03-01');
    expect(dateUtil.isSameMonth(anotherDate)).toBe(true);
  });

  test('addSeconds', () => {
    const result = dateUtil.addSeconds(30);
    expect(result.getSeconds()).toBe(30);
  });

  test('addMinutes', () => {
    const result = dateUtil.addMinutes(15);
    expect(result.getMinutes()).toBe(15);
  });

  test('addHours', () => {
    const result = dateUtil.addHours(4);
    expect(result.getHours()).toBe(4);
  });

  test('addDays', () => {
    const result = dateUtil.addDays(7);
    expect(result.getDate()).toBe(5);
  });

  test('addMonths', () => {
    const result = dateUtil.addMonths(2);
    expect(result.getMonth()).toBe(5);
  });

  test('addYears', () => {
    const result = dateUtil.addYears(5);
    expect(result.getFullYear()).toBe(2028);
  });

});