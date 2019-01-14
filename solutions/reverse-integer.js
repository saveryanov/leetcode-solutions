// https://leetcode.com/problems/reverse-integer/
const now = require('performance-now');

const USE_STRING_SOLUTION = false;

/**
 * Given a 32-bit signed integer, reverse digits of an integer.
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let integerMax = 2147483647;
    let integerMin = -2147483648;

    if (USE_STRING_SOLUTION) {
        let result = x < 0 ? '-' : '';
        let str = x.toString();
        for (let i = str.length - 1; i >= 0; i--) {
            result += str[i];
        }
        result = parseInt(result);
        if (result > integerMax || result < integerMin) {
            return 0;
        } else {
            return result;
        }
    }

    let result = 0;
    let sign = 1;

    if (x < 0) {
        sign = -1;
        x *= sign;
    }

    while (x != 0) {
        let digit = x % 10;
        x = Math.floor(x / 10);
        result = result * 10 + digit;
    }

    if (result > integerMax || result < integerMin) {
        return 0;
    } else {
        return result * sign;
    }
};

/**
 * Some tests for checking the result
 */
function test() {
    let testCases = [
        {
            x: 123,
            expected: 321,
        },
        {
            x: -123,
            expected: -321,
        },
        {
            x: 120,
            expected: 21,
        },
        {
            x: 12000,
            expected: 21,
        },
        {
            x: Math.pow(2, 31),
            expected: 0,
        },
        {
            x: Math.pow(2, 31) - 1,
            expected: 0,
        },
        {
            x: 214748364,
            expected: 463847412,
        },
        {
            x: Math.pow(-2, 31),
            expected: 0,
        },
    ];

    for (let testCase of testCases) {
        let startAt = now();
        let result = reverse(testCase.x);
        let endAt = now();
        console.log(` ${(result !== testCase.expected) ? '❌' : '✅'} (${(endAt - startAt).toFixed(5)} ms) [${testCase.x}] output: ${result}; expected ${testCase.expected};`);
    }
}

test();
