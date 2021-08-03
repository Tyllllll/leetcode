/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  if (!matrix.length) {
    return 0
  }
  const heights = Array(matrix[0].length + 1) // 前加bar,后bar手动清除
    .fill(0)
  let stack
  let ans = 0
  for (let i = 0; i < matrix.length; i++) {
    stack = [0]
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === '0') {
        heights[j + 1] = 0
      } else {
        heights[j + 1] += 1
      }
      while (stack.length && heights[j + 1] < heights[stack[stack.length - 1]]) {
        const area = (j - stack[stack.length - 2]) * heights[stack[stack.length - 1]]
        ans = Math.max(area, ans)
        stack.pop()
      }
      stack.push(j + 1)
    }
    while (stack.length > 1) {
      const area = (matrix[0].length - stack[stack.length - 2]) * heights[stack[stack.length - 1]]
      ans = Math.max(area, ans)
      stack.pop()
    }
  }
  return ans
}
