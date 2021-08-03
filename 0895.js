var FreqStack = function () {
  this.group = new Map()
  this.count = new Map()
  this.max = 0
}

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
  if (this.count.has(val)) {
    this.count.set(val, this.count.get(val) + 1)
  } else {
    this.count.set(val, 1)
  }
  if (this.group.get(this.count.get(val))) {
    this.group.get(this.count.get(val)).push(val)
  } else {
    this.group.set(this.count.get(val), [val])
    this.max++
  }
}

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  const val = this.group.get(this.max).pop()
  if (!this.group.get(this.max).length) {
    this.group.delete(this.max)
    this.max--
  }
  this.count.set(val, this.count.get(val) - 1)
  return val
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
