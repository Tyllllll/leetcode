/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let count = 0
  var getDecimalValueChild = function (head) {
    if (!head.next) {
      return head.val * 2 ** count++
    }
    return getDecimalValueChild(head.next) + head.val * 2 ** count++
  }
  return getDecimalValueChild(head)
}
// var getDecimalValue = function(head) {
//   let result = 0
//   while (head) {
//       result = result * 2 + head.val
//       head = head.next
//   }
//   return result
// };
