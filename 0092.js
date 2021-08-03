/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  if (1 === m) {
    return reverseN(head, n)
  }
  head.next = reverseBetween(head.next, m - 1, n - 1)
  return head
}
let tail
var reverseN = function (head, n) {
  if (1 === n) {
    tail = head.next
    return head
  }
  let last = reverseN(head.next, n - 1)
  head.next.next = head
  head.next = tail
  return last
}
// var reverseBetween = function(head, m, n) {
//     if (!head || !head.next) {
//         return head
//     }
//     const dummy = new ListNode(0, head)
//     head = dummy
//     for (let i = 0; i < m - 1; i++) {
//         head = head.next
//     }
//     let mid = head
//     head = head.next
//     let reverseList = new ListNode(0, null)
//     let p
//     let tail = head
//     for (let i = 0; i < n - m + 1; i++) {
//         p = head
//         head = head.next
//         p.next = reverseList.next
//         reverseList.next = p
//     }
//     mid.next = reverseList.next
//     tail.next = head
//     return dummy.next
// };
