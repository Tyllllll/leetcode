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
var removeZeroSumSublists = function (head) {
  let dummy = new ListNode(0, head)
  let arraySum = []
  let deletePrev
  let p = head
  let sum = 0
  while (p) {
    if (!arraySum.length) {
      sum += p.val
      if (!sum) {
        dummy.next = p.next
        p = p.next
        continue
      }
      arraySum.push(sum)
      p = p.next
      continue
    }
    sum += p.val
    if (!sum) {
      dummy.next = p.next
      arraySum = []
      p = p.next
      continue
    }
    if (!arraySum.includes(sum)) {
      arraySum.push(sum)
    } else {
      deletePrev = dummy
      for (let i = 0; i < arraySum.indexOf(sum) + 1; i++) {
        deletePrev = deletePrev.next
      }
      deletePrev.next = p.next
      arraySum.splice(arraySum.indexOf(sum) + 1, arraySum.length - arraySum.indexOf(sum))
    }
    p = p.next
  }
  return dummy.next
}
