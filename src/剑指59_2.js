var MaxQueue = function () {
  this.queue = []
  this.max = []
  this.length = 0
}

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  return this.length ? this.max[0] : -1
}

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
  while (this.max.length && this.max[this.max.length - 1] <= value) {
    this.max.pop()
  }
  this.max.push(value)
  this.queue.push(value)
  this.length++
}

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
  if (this.length) {
    if (this.max_value() === this.queue[0]) {
      this.max.shift()
    }
    this.length--
    return this.queue.shift()
  }
  return -1
}

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
