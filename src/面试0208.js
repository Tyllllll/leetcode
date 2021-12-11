/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  const dummy = new ListNode(0, head)
  let fast = dummy
  let slow = dummy
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      slow = dummy
      while (fast !== slow) {
        fast = fast.next
        slow = slow.next
      }
      return fast
    }
  }
  return null
}
