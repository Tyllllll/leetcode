/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  const dummy = new ListNode(0, head)
  let p = dummy
  while (head) {
    if (head.val === val) {
      p.next = head.next
    } else {
      p = p.next
    }
    head = head.next
  }
  return dummy.next
}
