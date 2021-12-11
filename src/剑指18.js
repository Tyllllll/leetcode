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
var deleteNode = function (head, val) {
  const dummy = new ListNode(0, head)
  head = dummy
  while (head && head.next) {
    if (head.next.val === val) {
      head.next = head.next.next
    }
    head = head.next
  }
  return dummy.next
}
