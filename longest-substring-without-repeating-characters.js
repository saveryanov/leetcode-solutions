// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * Func to find the length of the longest substring without repeating characters
 * @param {string} str
 * @return {number}
 */
var lengthOfLongestSubstring = function (str) {
    let substr = '';
    let bestLen = 0;
    for (let char of str) {
        if (substr.indexOf(char) === -1) {
            substr += char;
        } else {
            substr = substr.slice(substr.indexOf(char) + 1) + char;
        }
        if (bestLen < substr.length) {
            bestLen = substr.length;
        }
    }

    return bestLen;
};

/**
 * Some tests for checking the result
 */
function test() {
    let testCases = {
        'abcabcbb': 3,
        'bbb': 1,
        'pwwkew': 3,
        '12333345666677889': 4,
        'bbbaaabbbaaa': 2,
        'bbbaaabbbacaa': 3,
        'gray fox jumps over a lazy cog': 10,
        '00001231112342223': 4,
    };

    for (let str of Object.keys(testCases)) {
        let result = lengthOfLongestSubstring(str);
        console.log(` ${(result !== testCases[str]) ? '❌' : '✅'} [${str}] output: ${result}; expected ${testCases[str]};`);
    }
}

test();
