/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  const preSum = [0]
  const stack = [0]
  hours.forEach((num, index) => {
    preSum.push(preSum[preSum.length - 1] + (num > 8 ? 1 : -1))
    if (preSum[preSum.length - 1] < preSum[stack[stack.length - 1]]) {
      stack.push(index + 1)
    }
  })
  let max = 0
  for (let i = preSum.length - 1; i >= max; i--) {
    while (stack.length && preSum[i] > preSum[stack[stack.length - 1]]) {
      max = stack.length ? Math.max(max, i - stack[stack.length - 1]) : max
      stack.pop()
    }
  }
  return max
}
