/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) {
    return true
  }
  let fast = head,
    slow = head
  while (fast.next && fast.next.next) {
    fast = fast.next.next
    slow = slow.next
  }
  const mid = slow

  fast = mid.next
  slow = null
  while (fast) {
    let tempNode = fast.next
    fast.next = slow
    slow = fast
    fast = tempNode
  }
  mid.next = slow

  fast = mid.next
  slow = head
  while (fast) {
    if (fast.val !== slow.val) {
      return false
    }
    fast = fast.next
    slow = slow.next
  }
  return true
}
