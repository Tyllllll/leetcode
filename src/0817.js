/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function (head, G) {
  let num = 0
  let isComponent = false
  while (head) {
    if (G.includes(head.val)) {
      isComponent = true
    } else {
      if (isComponent) {
        isComponent = false
        num++
      }
    }
    head = head.next
  }
  if (isComponent) {
    num++
  }
  return num
}
