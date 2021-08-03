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
var nextLargerNodes = function (head) {
  let index = 0
  let stack_index = []
  let stack_val = []
  let result = []
  while (head) {
    if (!stack_val.length) {
      stack_index.push(index)
      stack_val.push(head.val)
    } else {
      while (true) {
        if (!stack_val.length || head.val <= stack_val[stack_val.length - 1]) {
          stack_index.push(index)
          stack_val.push(head.val)
          break
        } else {
          result[stack_index.pop()] = head.val
          stack_val.pop()
        }
      }
    }
    index++
    head = head.next
  }
  while (stack_index.length) {
    stack_val.pop()
    result[stack_index.pop()] = 0
  }
  return result
}
