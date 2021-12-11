/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head
  }
  const newHead = head.next
  head.next = swapPairs(newHead.next)
  newHead.next = head
  return newHead
}
// var swapPairs = function(head) {
//     const dummy = new ListNode(0, head)
//     let first, second
//     if (head && head.next) {
//         head.next.next = swapPairs(head.next.next)
//         first = head
//         second = first.next
//         first.next = second.next
//         second.next = first
//         dummy.next = second
//     }
//     return dummy.next
// };
// var swapPairs = function(head) {
//     const dummy = new ListNode(0, head)
//     let first, second
//     head = dummy
//     while (head.next && head.next.next) {
//         first = head.next
//         second = first.next
//         first.next = second.next
//         second.next = first
//         head.next = second
//         head = head.next.next
//     }
//     return dummy.next
// };
