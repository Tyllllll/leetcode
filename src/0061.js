/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next) {
    return head
  }
  let length = 0
  let p = head
  while (p && p.next) {
    length++
    p = p.next
  }
  length++
  p.next = head
  p = head
  while (length - (k % length) - 1) {
    p = p.next
    k++
  }
  head = p.next
  p.next = null
  return head
}
