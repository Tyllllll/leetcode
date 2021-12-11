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
var deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head
  }
  let dummy = new ListNode(0, head)
  head = dummy
  let p
  while (head.next && head.next.next) {
    if (head.next.val !== head.next.next.val) {
      head = head.next
    } else {
      p = head.next
      while (p.next && p.val === p.next.val) {
        p = p.next
      }
      head.next = p.next
    }
  }
  return dummy.next
}
