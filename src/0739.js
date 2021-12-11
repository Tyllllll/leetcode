/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  const stack = []
  const res = Array(T.length).fill(0)
  for (let i = 0; i < T.length; i++) {
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      res[stack[stack.length - 1]] = i - stack[stack.length - 1]
      stack.pop()
    }
    stack.push(i)
  }
  return res
}
