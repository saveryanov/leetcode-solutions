// https://leetcode.com/problems/reverse-words-in-a-string/

/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
    return s.trim()
        .split(/\s+/)
        .reverse()
        .join(' ');
}
