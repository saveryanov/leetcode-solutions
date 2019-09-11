// https://leetcode.com/problems/perfect-number/

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    var divisors = [];
    for (var divisor = 1; divisor < num; divisor++) {
        if (num % divisor === 0) {
            divisors.push(divisor);
        }
    }
    if (!divisors.length) return false;
    return num === divisors.reduce((a, b) => a + b);
};

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber2 = function(num) {
    var sum = 0;
    for (var divisor = 1; divisor < num; divisor++) {
        if (num % divisor === 0) {
            sum += divisor;
            if (sum > num) return false;
        }
    }
    return sum == num;
};