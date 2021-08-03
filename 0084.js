/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  heights = [0, ...heights, 0]
  const stack = []
  let ans = 0
  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      const area = (i - stack[stack.length - 2] - 1) * heights[stack[stack.length - 1]]
      ans = Math.max(ans, area)
      stack.pop()
    }
    stack.push(i)
  }
  return ans
}
