// https://leetcode.com/problems/day-of-the-week/

/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayOfTheWeek = function(day, month, year) {
    return WEEKDAYS[new Date(year, month - 1, day).getDay()]
};