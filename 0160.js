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
  if (!headA || !headB) {
    return null
  }
  let pa = headA
  let pb = headB
  while (pa !== pb) {
    if (pa !== null) {
      pa = pa.next
    } else {
      pa = headB
    }
    if (pb !== null) {
      pb = pb.next
    } else {
      pb = headA
    }
  }
  return pa
}
