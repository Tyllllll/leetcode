/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function (head, k) {
  let i = k
  let fast = head,
    slow = head
  while (i--) {
    fast = fast.next
  }
  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  return slow.val
}
