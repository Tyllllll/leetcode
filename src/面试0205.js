/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const newHead = new ListNode(0)
  let p = newHead
  let countIn = false
  while (l1 && l2) {
    p.next = new ListNode(l1.val + l2.val + countIn)
    countIn = false
    p = p.next
    if (p.val >= 10) {
      p.val -= 10
      countIn = true
    }
    l1 = l1.next
    l2 = l2.next
  }
  while (l1) {
    p.next = new ListNode(l1.val + countIn)
    countIn = false
    p = p.next
    if (p.val >= 10) {
      p.val -= 10
      countIn = true
    }
    l1 = l1.next
  }
  while (l2) {
    p.next = new ListNode(l2.val + countIn)
    countIn = false
    p = p.next
    if (p.val >= 10) {
      p.val -= 10
      countIn = true
    }
    l2 = l2.next
  }
  if (countIn) {
    p.next = new ListNode(1)
  }
  return newHead.next
}
