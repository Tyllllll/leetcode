/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
  this.stack = []
  this.add = Array(maxSize).fill(0)
  this.length = 0
  this.maxSize = maxSize
}

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  if (this.length < this.maxSize) {
    this.stack.push(x)
    this.length++
  }
}

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  if (this.length) {
    let result = this.stack.pop() + this.add[this.length - 1]
    if (this.length > 1) {
      this.add[this.length - 2] += this.add[this.length - 1]
      this.add[this.length - 1] = 0
    } else {
      this.add[this.length - 1] = 0
    }
    this.length--
    return result
  } else {
    return -1
  }
}

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  const min = Math.min(this.length - 1, k - 1)
  this.add[min] += val
}
