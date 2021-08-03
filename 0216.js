/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const res = []
  function dfs(arr, i, sum) {
    if (sum >= n || arr.length >= k || i > 9) {
      if (sum === n && arr.length === k) {
        res.push(arr)
      }
      return
    }
    dfs([...arr, i], i + 1, sum + i)
    dfs(arr, i + 1, sum)
  }
  dfs([], 1, 0)
  return res
}

console.log(combinationSum3(9, 45))
