/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  if (!head) {
    return null
  }
  const dummy = new ListNode(0, head)
  let sorted = head
  let cur = head.next
  while (cur) {
    if (sorted.val <= cur.val) {
      sorted = sorted.next
    } else {
      // 插入
      let p = dummy
      while (p.next.val <= cur.val) {
        p = p.next
      }
      sorted.next = cur.next
      cur.next = p.next
      p.next = cur
    }
    cur = sorted.next
  }
  return dummy.next
}
