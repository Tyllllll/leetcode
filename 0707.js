/**
 * Initialize your data structure here.
 */
var MyLinkedList = function (val, list) {
  this.head = null
  this.length = 0
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (Number.isNaN(index)) {
    return -1
  }
  let p = this.head
  while (index && p.next) {
    p = p.next
    index--
  }
  if (index > 0) {
    return -1
  }
  return p.val
}

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  this.head = new ListNode(val, this.head)
  this.length++
}

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let dummy = new ListNode(0, this.head)
  let p = dummy
  while (p && p.next) {
    p = p.next
  }
  p.next = new ListNode(val)
  this.head = dummy.next
  this.length++
}

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index <= 0) {
    this.addAtHead(val)
  } else {
    let p = this.head
    // 为了取插入的前一个指针
    index--
    while (index-- && p && p.next) {
      p = p.next
    }
    if (index > 0) {
      this.addAtTail(val)
    } else {
      let temp = new ListNode(val, p.next)
      p.next = temp
    }
  }
  this.length++
}

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0) {
    return -1
  }
  const dummy = new ListNode(0, this.head)
  let p = dummy
  // 为了取插入的前一个指针
  while (index && p.next && p.next.next) {
    p = p.next
    index--
  }
  if (index > 0) {
    return -1
  }
  p.next = p.next.next
  this.head = dummy.next
  this.length--
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
