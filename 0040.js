/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b)
  return (function dfs(subNums, i, target, res) {
    if (target === 0) {
      res.push(subNums)
      return res
    }
    if (target < 0 || i === candidates.length) return
    dfs([...subNums, candidates[i]], i + 1, target - candidates[i], res)
    while (candidates[i] === candidates[i + 1]) i++
    dfs(subNums, i + 1, target, res)
    return res
  })([], 0, target, [])
}
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))
