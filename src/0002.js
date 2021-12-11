/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const head = new ListNode()
  let p1, p2, p3
  p1 = l1
  p2 = l2
  p3 = head
  let countInFlag = false
  let p1EndFlag
  let p2EndFlag
  while (true) {
    p3.val = (p1EndFlag ? 0 : p1.val) + (p2EndFlag ? 0 : p2.val) + Number(countInFlag)
    countInFlag = false
    if (p3.val >= 10) {
      p3.val -= 10
      countInFlag = true
    }
    if (p1.next === null && p2.next === null) {
      if (countInFlag) {
        p3.next = new ListNode(1, null)
      }
      break
    } else {
      if (p1.next === null) {
        p1EndFlag = true
      }
      if (p2.next === null) {
        p2EndFlag = true
      }
      if (!p1EndFlag) {
        p1 = p1.next
      }
      if (!p2EndFlag) {
        p2 = p2.next
      }
      p3.next = new ListNode()
      p3 = p3.next
    }
  }
  return head
}
