// https://leetcode.com/problems/perfect-number/

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num <= 0) return false;
    var sum = 0;
    for (var divisor = 1; divisor < num; divisor++) {
        if (num % divisor === 0) {
            sum += divisor;
            if (sum > num) return false;
        }
    }
    return sum == num;
};


// Not so fair but it's the fastest solution :)
// Runtime: 40 ms, faster than 100.00% of JavaScript online submissions for Perfect Number.
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Perfect Number.
/**
 * @param {number} num
 * @return {boolean}
 */
const perfects = [
    6,
    28,
    496,
    8128,
    33550336
];
var notSoFairSolution = function(num) {
    return perfects.indexOf(num) !== -1;
};
