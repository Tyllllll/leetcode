/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  const merge = (head1, head2) => {
    const dummyHead = new ListNode(0)
    let temp = dummyHead
    let temp1 = head1
    let temp2 = head2
    while (temp1 !== null && temp2 !== null) {
      if (temp1.val <= temp2.val) {
        temp.next = temp1
        temp1 = temp1.next
      } else {
        temp.next = temp2
        temp2 = temp2.next
      }
      temp = temp.next
    }
    if (temp1 !== null) {
      temp.next = temp1
    } else if (temp2 !== null) {
      temp.next = temp2
    }
    return dummyHead.next
  }
  if (head === null) {
    return head
  }
  let length = 0
  let node = head
  while (node) {
    node = node.next
    length++
  }
  const dummy = new ListNode(0, head)
  for (let subLenth = 1; subLenth < length; subLenth <<= 1) {
    let prev = dummy
    let curr = dummy.next
    while (curr) {
      // 取第一段链表头
      let head1 = curr
      for (let i = 1; i < subLenth && curr.next; i++) {
        curr = curr.next
      }
      // 取第二段链表头
      let head2 = curr.next
      // 第一段链表头结尾置null
      curr.next = null
      curr = head2
      for (let i = 1; i < subLenth && curr && curr.next; i++) {
        curr = curr.next
      }
      // 取下一段链表头（如果有的话）
      let next = null
      if (curr) {
        next = curr.next
        curr.next = null
      }
      const merged = merge(head1, head2)
      // 连接合并链表头
      prev.next = merged
      // prev指针移动到merged的尾部（供下一次使用）
      while (prev.next) {
        prev = prev.next
      }
      curr = next
    }
  }
  return dummy.next
}

let head = new ListNode()
let temp = head
const arr = [1, 4, 3, 2, 5]
arr.forEach((val, index, arr) => {
  temp.val = val
  if (arr.length !== index + 1) {
    temp.next = new ListNode()
    temp = temp.next
  }
})

head = sortList(head)
temp = head
while (temp) {
  console.log(temp.val)
  temp = temp.next
}
