/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) {
    return true
  }
  // 取中点
  let fast = head,
    slow = head
  while (fast.next && fast.next.next) {
    fast = fast.next.next
    slow = slow.next
  }
  // mid为开始反转段链表头的前一个节点
  const mid = slow
  // 反转
  fast = mid.next
  slow = null
  while (fast) {
    let tempNode = fast.next
    fast.next = slow
    slow = fast
    fast = tempNode
  }
  mid.next = slow
  // console.log(head)
  // mid.next = reverseList(mid.next)
  // 比较
  fast = head
  slow = mid.next
  while (slow) {
    if (fast.val !== slow.val) {
      return false
    }
    fast = fast.next
    slow = slow.next
  }
  return true
}

var reverseList = function (head) {
  if (!head || !head.next) {
    return head
  }
  let last = reverseList(head.next)
  head.next.next = head
  head.next = null
  return last
}
