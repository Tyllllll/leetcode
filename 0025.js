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
var reverseKGroup = function (head, k) {
  let reverseList = function (head) {
    let fast = head
    let slow = null
    while (fast) {
      let tempNode = fast.next
      fast.next = slow
      slow = fast
      fast = tempNode
    }
    return slow
  }
  const dummy = new ListNode(0, head)
  let count = 0
  let begin = dummy
  let end = dummy
  while (end && end.next) {
    end = end.next
    count++
    if (count === k) {
      let tempNode = end.next
      end.next = null
      end = begin.next
      begin.next = reverseList(begin.next)
      end.next = tempNode
      begin = end
      count = 0
    }
  }
  return dummy.next
}
