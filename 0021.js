/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2
  } else if (l2 === null) {
    return l1
  } else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
  // let preHead = new ListNode()
  // let p = preHead
  // while (l1 && l2) {
  //     p.next = new ListNode()
  //     p = p.next
  //     if (l1.val < l2.val) {
  //         p.val = l1.val
  //         l1 = l1.next
  //     } else {
  //         p.val = l2.val
  //         l2 = l2.next
  //     }
  // }
  // if (l1) {
  //     p.next = l1
  // }
  // if (l2) {
  //     p.next = l2
  // }
  // return preHead.next
}
