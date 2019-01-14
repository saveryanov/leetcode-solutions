// https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Func to add the two numbers and return it as a linked list.
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let digit1 = l1;
    let digit2 = l2;
    let transferDigit = 0;
    let result;
    let l3;

    while (digit1 || digit2) {
        let sum = (digit1 ? digit1.val : 0) + (digit2 ? digit2.val : 0) + transferDigit;
        transferDigit = (sum >= 10) ? 1 : 0;
        if (result) {
            result.next = new ListNode(sum % 10);
            result = result.next;
        } else {
            result = new ListNode(sum % 10);
            l3 = result;
        }

        if (digit1) {
            digit1 = digit1.next;
        }
        if (digit2) {
            digit2 = digit2.next;
        }
    }

    if (transferDigit > 0) {
        result.next = new ListNode(transferDigit);
    }

    return l3;
};

function ListNode(val) {
     this.val = val;
     this.next = null;
}
