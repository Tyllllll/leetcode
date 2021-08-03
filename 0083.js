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
  let s = new Set()
  let p = head
  s.add(p.val)
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
