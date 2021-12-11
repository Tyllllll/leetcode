/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const stack = []
  height = [0, ...height, 0]
  let res = 0
  for (let i = 0; i < height.length; i++) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      const bottom_index = stack.pop()
      if (stack.length) {
        res +=
          (Math.min(height[i], height[stack[stack.length - 1]]) - height[bottom_index]) *
          (i - stack[stack.length - 1] - 1)
      }
    }
    stack.push(i)
  }
  return res
}
