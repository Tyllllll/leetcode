/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  const dummyBefore = new ListNode(0, null)
  let before = dummyBefore
  const dummyAfter = new ListNode(0, null)
  let after = dummyAfter
  while (head) {
    if (head.val < x) {
      before.next = head
      before = before.next
      // before.next = null
    } else {
      after.next = head
      after = after.next
      // after.next = null
    }
    head = head.next
  }
  after.next = null
  before.next = dummyAfter.next
  return dummyBefore.next
}
// var partition = function(head, x) {
//     if (!head || !head.next) {
//         return head
//     }
//     const dummy = new ListNode(0, head)
//     let p = dummy.next
//     let mid = dummy
//     while (p && p.val < x) {
//         mid = p
//         p = p.next
//     }
//     if (!p) {
//         return head
//     }
//     let tail
//     while (p) {
//         if (p.val >= x) {
//             tail = p
//         } else {
//             //交换
//             tail.next = p.next
//             p.next = mid.next
//             mid.next = p
//             mid = mid.next
//         }
//         p = tail.next
//     }
//     return dummy.next
// };
