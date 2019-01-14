// https://leetcode.com/problems/longest-palindromic-substring/
const now = require('performance-now');

/**
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
 *
 * @param {string} str
 * @return {string}
 */
var longestPalindrome = function (str) {
    return bruteForce(str);
};

/**
 * Brute force solution. Check all substrings by decreasing length of substring
 *
 * @param {string} str
 * @return {string}
 */
function bruteForce(str) {
    let strLength = str.length;
    for (let substrLength = strLength; substrLength > 0; substrLength--) {
        for (let i = 0; i <= strLength - substrLength; i++) {
            let substr = str.slice(i, i + substrLength);
            if (isPalindrome(substr)) {
                return substr;
            }
        }
    }
    return '';
}

/**
 * Check is string a palindrome
 *
 * @param {*} str
 * @returns
 */
function isPalindrome(str) {
    let strLen = str.length;
    for (var i = 0; i < Math.round(strLen / 2); i++) {
        if (str[i] !== str[strLen - i - 1]) return false;
    }
    return true;
}

/**
 * Some tests for checking the result
 */
function test() {
    let longStr = '';
    for (let i = 0; i < 1000; i++) {
        longStr += 'a';
    }

    let longStr2 = '';
    let longStr2Expected = '';
    for (let i = 0; i < 500; i++) {
        longStr2 += (i % 10).toString();
    }
    for (let i = 0; i < 500; i++) {
        longStr2 += 'b';
        longStr2Expected += 'b';
    }


    let testCases = [
        {
            input: 'babad',
            expected: ['bab', 'aba'],
        },
        {
            input: 'cbbd',
            expected: ['bb'],
        },
        {
            input: 'abacdfgdcaba',
            expected: ['aba'],
        },
        {
            input: 'abacdfdcaba',
            expected: ['abacdfdcaba'],
        },
        {
            input: '121001234321111',
            expected: ['1234321'],
        },
        {
            input: longStr,
            expected: [longStr],
        },
        {
            input: longStr2,
            expected: [longStr2Expected],
        },
        {
            input: 'ukxidnpsdfwieixhjnannbmtppviyppjgbsludrzdleeiydzawnfmiiztsjq'
                + 'qqnthwinsqnrhfjxtklvbozkaeetmblqbxbugxycrlzizthtuwxlmgfjokhqjyu'
                + 'krftvfwikxlptydybmmzdhworzlaeztwsjyqnshggxdsjrzazphugckgykzhqkd'
                + 'rleaueuajjdpgagwtueoyybzanrvrgevolwssvqimgzpkxehnunycmlnetfaflh'
                + 'usauopyizbcpntywntadciopanyjoamoyexaxulzrktneytynmheigspgyhkelx'
                + 'gwplizyszcwdixzgxzgxiawstbnpjezxinyowmqsysazgwxpthloegxvezsxcvo'
                + 'rzquzdtfcvckjpewowazuaynfpxsxrihsfswrmuvluwbdazmcealapulnahgdxx'
                + 'ycizeqelesvshkgpavihywwlhdfopmmbwegibxhluantulnccqieyrbjjqtlgkp'
                + 'fezpxmlwpyohdyftzgbeoioquxpnrwrgzlhtlgyfwxtqcgkzcuuwagmlvgiwrhn'
                + 'redtulxudrmepbunyamssrfwyvgabbcfzzjayccvvwxzbfgeglqmuogqmhkjebe'
                + 'htwnmxotjwjszvrvpfpafwomlyqsgnysydfdlbbltlwugtapwgfnsiqxcnmdlrx'
                + 'oodkhaaaiioqglgeyuxqefdxbqbgbltrxcnihfwnzevvtkkvtejtecqyhqwjnnw'
                + 'frzptzhdnmvsjnnsnixovnotugpzuymkjplctzqbfkdbeinvtgdpcbvzrmxdqth'
                + 'gorpaimpsaenmnyuyoqjqqrtcwiejutafyqmfauufwripmpcoknzyphratopyua'
                + 'dgsfrsrqkfwkdlvuzyepsiolpxkbijqw',
            expected: ['aueua'],
        },
    ];

    for (let testCase of testCases) {
        let startAt = now();
        let result = longestPalindrome(testCase.input);
        let endAt = now();
        console.log(` ${(testCase.expected.indexOf(result) == -1) ? '❌' : '✅'} (${(endAt - startAt).toFixed(5)} ms) [${testCase.input}] output: ${result}; expected ${testCase.expected[0]};`);
    }
}

test();
