// https://leetcode.com/problems/median-of-two-sorted-arrays/
const now = require('performance-now');

const USE_BUILT_IN_FUNCTIONS = false; // array concatenation will be produced by default array methods: push and sort

/**
 * Func to find the median of the two sorted arrays.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let nums3 = [];
    let nums1length = nums1.length;
    let nums2length = nums2.length;
    let totalLength = nums1length + nums2length;

    if (USE_BUILT_IN_FUNCTIONS) {
        nums3.push(...nums1);
        nums3.push(...nums2);
        nums3.sort((a, b) => parseInt(a) - parseInt(b));
    } else {
        let i1 = 0;
        let i2 = 0;
        for (let i = 0; i < totalLength / 2 + 1; i++) {
            if (i1 >= nums1length) {
                nums3.push(nums2[i2]);
                i2++;
                continue;
            }

            if (i2 >= nums2length) {
                nums3.push(nums1[i1]);
                i1++;
                continue;
            }

            if (nums1[i1] < nums2[i2]) {
                nums3.push(nums1[i1]);
                i1++;
            } else {
                nums3.push(nums2[i2]);
                i2++;
            }
        }
    }

    if (totalLength % 2) {
        return nums3[Math.floor(totalLength / 2)];
    } else {
        return (nums3[totalLength / 2 - 1] + nums3[totalLength / 2]) / 2;
    }
};

/**
 * Some tests for checking the result
 */
function test() {
    let testCases = [
        {
            median: 2,
            nums1: [1, 3],
            nums2: [2],
        },
        {
            median: 2.5,
            nums1: [1, 2],
            nums2: [3, 4],
        },
        {
            median: 3.5,
            nums1: [],
            nums2: [3, 4],
        },
        {
            median: 3,
            nums1: [],
            nums2: [3],
        },
        {
            median: 5.5,
            nums1: [3, 4, 6],
            nums2: [5, 7, 8],
        },
        {
            median: 3.5,
            nums1: [1, 3, 4, 10],
            nums2: [2, 11],
        },
    ];

    for (let testCase of testCases) {
        let startAt = now();
        let result = findMedianSortedArrays(testCase.nums1, testCase.nums2);
        let endAt = now();
        console.log(` ${(result !== testCase.median) ? '❌' : '✅'} (${(endAt - startAt).toFixed(5)} ms) [${testCase.nums1.toString()}] and [${testCase.nums2.toString()}] output: ${result}; expected ${testCase.median};`);
    }
}

test();
