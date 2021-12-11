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
  let stack1 = []
  let stack2 = []
  let p1 = l1,
    p2 = l2
  while (p1 || p2) {
    if (p1) {
      stack1.push(p1.val)
      p1 = p1.next
    }
    if (p2) {
      stack2.push(p2.val)
      p2 = p2.next
    }
  }
  let result = []
  let num
  let count = false
  while (stack1.length || stack2.length) {
    if (!stack1.length) {
      num = stack2.pop() + count
    } else if (!stack2.length) {
      num = stack1.pop() + count
    } else {
      num = stack1.pop() + stack2.pop() + count
    }
    count = false
    if (num >= 10) {
      num -= 10
      count = true
    }
    result.push(num)
  }
  if (count) {
    result.push(1)
  }
  let resultHead = new ListNode(0)
  let p = resultHead
  while (result.length) {
    p.next = new ListNode(result.pop())
    p = p.next
  }
  return resultHead.next
}
