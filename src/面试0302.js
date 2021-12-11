/**
 * initialize your data structure here.
 */
var MinStack = function (...arr) {
  this.stack = []
  this.min = []
  for (const i of arr) {
    this.push(i)
  }
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)
  this.min.push(this.min.length < 1 || this.getMin() > x ? x : this.getMin())
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop()
  this.min.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  const res = this.stack.pop()
  this.stack.push(res)
  return res
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  const res = this.min.pop()
  this.min.push(res)
  return res
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
