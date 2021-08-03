var StockSpanner = function () {
  this.Stack = []
  this.weight = []
}

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  if (!this.Stack.length || this.Stack[this.Stack.length - 1] > price) {
    this.Stack.push(price)
    this.weight.push(0)
    return 1
  } else {
    let days = 0
    while (this.Stack[this.Stack.length - 1] <= price) {
      this.Stack.pop()
      days += this.weight.pop() + 1
    }
    this.Stack.push(price)
    this.weight.push(days)
    return this.weight[this.weight.length - 1] + 1
  }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
