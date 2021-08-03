/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  let array = []
  if (!head) {
    return array
  }
  array = reversePrint(head.next)
  array.push(head.val)
  return array
}
