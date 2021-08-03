/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  return (function dfs(str, left, right, res) {
    if (left === 0 && right === 0) {
      res.push(str)
      return
    }
    if (left > 0 && left <= right) {
      dfs(str + '(', left - 1, right, res)
    }
    if (right > 0) {
      dfs(str + ')', left, right - 1, res)
    }
    return res
  })('', n, n, [])
}

console.log(generateParenthesis(0))
