/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  const dummy = new ListNode(0, list1)
  const dummy2 = new ListNode(0, list2)
  let prev = dummy
  let tail = dummy
  while (b--) {
    if (a) {
      a--
      prev = prev.next
    }
    tail = tail.next
  }
  tail = tail.next
  let tail2 = dummy2
  while (tail2 && tail2.next) {
    tail2 = tail2.next
  }
  prev.next = list2
  tail2.next = tail.next
  return dummy.next
}
