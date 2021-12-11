/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  return (function dfs(arr, i, res) {
    if (arr.length === k) {
      res.push(arr)
      return
    }
    if (i === n + 1) {
      return
    }
    dfs([...arr, i], i + 1, res)
    dfs(arr, i + 1, res)
    return res
  })([], 1, [])
}
console.log(combine(4, 2))
