/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity
  this.head = null
  this.tail = null
  this.map = new Map()
  this.length = 0
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) {
    return -1
  }
  const entry = this.map.get(key)
  // 移动
  if (this.head !== entry) {
    this.moveToHead(entry)
  }
  return entry.value
}

/**
 * @param {*} entry
 * @return {void}
 */
LRUCache.prototype.moveToHead = function (entry) {
  if (entry.next) {
    entry.next.before = entry.before
  } else {
    this.tail = entry.before
  }
  if (entry.before) {
    entry.before.next = entry.next
  } else {
    this.head = entry.next
  }
  this.head.before = entry
  entry.next = this.head
  entry.before = null
  this.head = entry
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    // 移动
    const entry = this.map.get(key)
    entry.value = value
    if (this.head !== entry) {
      this.moveToHead(entry)
    }
  } else {
    // 加入链表
    const entry = new Entry(key, value)
    this.length += 1
    if (this.head === null) {
      this.tail = entry
    } else {
      this.head.before = entry
      entry.next = this.head
      if (this.length > this.capacity) {
        this.length -= 1
        this.map.delete(this.tail.key)
        this.tail.before.next = null
        this.tail = this.tail.before
      }
    }
    this.head = entry
    // 加入map
    this.map.set(key, entry)
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
export default LRUCache

function Entry(key, value) {
  this.key = key
  this.value = value
  this.before = null
  this.next = null
}
