// https://leetcode.com/problems/string-to-integer-atoi/
const now = require('performance-now');

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    str = str.toString().trim();

    // let result = parseInt(str);  // why not? :)
    let result = myParseInt(str);

    let integerMax = 2147483647;
    let integerMin = -2147483648;

    if (result > integerMax) {
        return integerMax;
    } else if (result < integerMin) {
        return integerMin;
    } else if (!result || isNaN(result)) {
        return 0;
    } else {
        return result;
    }
};

/**
 * If parseInt is not allowed
 *
 * @param {*} str
 * @returns
 */
function myParseInt(str) {
    let result = 0;
    let negative = false;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char == '-' && i == 0) {
            negative = true;
            continue;
        }
        if (char == '+' && i == 0) {
            negative = false;
            continue;
        }
        if (char.match(/\d/)) {
            result *= 10;
            result += parseInt(char);
        } else {
            break;
        }
    }
    if (negative) {
        result *= -1;
    }

    return result;
}

/**
 * Some tests for checking the result
 */
function test() {
    let testCases = [
        {
            x: '42',
            expected: 42,
        },
        {
            x: '   -42',
            expected: -42,
        },
        {
            x: '4193 with words',
            expected: 4193,
        },
        {
            x: 'words and 987',
            expected: 0,
        },
        {
            x: '-91283472332',
            expected: -2147483648,
        },
        {
            x: '123',
            expected: 123,
        },
        {
            x: '-123',
            expected: -123,
        },
        {
            x: '120',
            expected: 120,
        },
        {
            x: '12000',
            expected: 12000,
        },
        {
            x: Math.pow(2, 31),
            expected: 2147483647,
        },
        {
            x: Math.pow(2, 31) - 1,
            expected: 2147483647,
        },
        {
            x: '214748364',
            expected: 214748364,
        },
        {
            x: Math.pow(-2, 31),
            expected: -2147483648,
        },
    ];

    for (let testCase of testCases) {
        let startAt = now();
        let result = myAtoi(testCase.x);
        let endAt = now();
        console.log(` ${(result !== testCase.expected) ? '❌' : '✅'} (${(endAt - startAt).toFixed(5)} ms) [${testCase.x}] output: ${result}; expected ${testCase.expected};`);
    }
}

test();
