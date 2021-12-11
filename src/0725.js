/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (root, k) {
  let length = 0
  let p = root
  while (p) {
    p = p.next
    length++
  }
  let avgLength = Math.floor(length / k)
  let oneLongers = length % k
  let result = []
  let tempNode
  for (let i = 0; i < k; i++) {
    p = root
    for (let j = 0; j < avgLength - !Boolean(oneLongers) && p; j++) {
      p = p.next
    }
    if (p) {
      tempNode = p.next
      p.next = null
    } else {
      tempNode = null
    }
    result.push(root)
    root = tempNode
    if (oneLongers > 0) {
      oneLongers--
    }
  }
  return result
}
