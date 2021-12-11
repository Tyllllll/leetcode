/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  const prevList = new ListNode(0)
  const afterList = new ListNode(0)
  let prev = prevList
  let after = afterList
  while (head) {
    if (head.val < x) {
      prev.next = head
      prev = prev.next
    } else {
      after.next = head
      after = after.next
    }
    head = head.next
  }
  prev.next = afterList.next
  after.next = null
  return prevList.next
}
