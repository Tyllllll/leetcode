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
var oddEvenList = function (head) {
  let dummy = new ListNode(0)
  let evenHead = new ListNode(0)
  let oddP = dummy
  let evenP = evenHead
  while (head && head.next) {
    oddP.next = head
    evenP.next = head.next
    head = head.next.next
    oddP = oddP.next
    evenP = evenP.next
  }
  evenP.next = null
  if (head) {
    oddP.next = head
    oddP = oddP.next
  }
  oddP.next = evenHead.next
  return dummy.next
}
