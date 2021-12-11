/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const stack = []
  let volume = 0
  for (let i = 0; i < height.length; i++) {
    while (stack.length && height[i] >= height[stack[stack.length - 1]]) {
      let bottom = height[stack.pop()]
      if (!stack.length) {
        break
      }
      volume +=
        (Math.min(height[stack[stack.length - 1]], height[i]) - bottom) *
        (i - stack[stack.length - 1] - 1)
    }
    stack.push(i)
  }
  return volume
}
