/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let preHead = new ListNode(0, head)
  let firstPoint = preHead,
    secondPoint = preHead
  for (let i = 0; i <= n; i++) {
    firstPoint = firstPoint.next
  }
  while (firstPoint) {
    firstPoint = firstPoint.next
    secondPoint = secondPoint.next
  }
  secondPoint.next = secondPoint.next.next
  return preHead.next
}
