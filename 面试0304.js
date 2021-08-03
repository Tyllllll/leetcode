/**
 * Initialize your data structure here.
 */
var MyQueue = function (...arr) {
  this.stack1 = [...arr]
  this.stack2 = []
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack1.push(x)
}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.stack2.length) {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop())
    }
  }
  return this.stack2.pop()
}

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (!this.stack2.length) {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop())
    }
  }
  const result = this.stack2.pop()
  this.stack2.push(result)
  return result
}

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !Boolean(this.stack1.length + this.stack2.length)
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
