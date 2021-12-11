/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let pa = headA,
    pb = headB
  while (pa !== pb) {
    pa = pa !== null ? pa.next : headB
    pb = pb !== null ? pb.next : headA
  }
  return pa
}
