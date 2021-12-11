/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head || !head.next) {
    return head
  }
  let fast = head,
    slow = head
  while (fast.next && fast.next.next) {
    fast = fast.next.next
    slow = slow.next
  }
  // mid为前半段最后一个节点，或正中点
  const mid = slow

  fast = mid.next
  slow = null
  while (fast) {
    let tempNode = fast.next
    fast.next = slow
    slow = fast
    fast = tempNode
  }
  mid.next = slow

  fast = head
  slow = mid.next
  mid.next = null
  let p = new ListNode(0, null)
  while (fast || slow) {
    if (fast) {
      p.next = fast
      fast = fast.next
      p = p.next
    }
    if (slow) {
      p.next = slow
      slow = slow.next
      p = p.next
    }
  }
  // const dummy = new ListNode(0, null)
  //     let p = dummy
  //     while (fast && slow) {
  //         p.next = fast
  //         fast = fast.next
  //         p = p.next
  //         p.next = slow
  //         slow = slow.next
  //         p = p.next
  //     }
  //     if (fast) {
  //         p.next = fast
  //         p.next.next = null
  //     }
}
