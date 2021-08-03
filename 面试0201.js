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
var removeDuplicateNodes = function (head) {
  if (!head) {
    return null
  }
  let p = head
  let s = new Set().add(head.val)
  while (p && p.next) {
    if (s.has(p.next.val)) {
      p.next = p.next.next
    } else {
      s.add(p.next.val)
      p = p.next
    }
  }
  return head
}
