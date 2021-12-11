/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  return (function dfs(subNums, i, target, res) {
    if (target === 0) {
      res.push(subNums)
      return
    }
    if (target < 0 || i === candidates.length) {
      return
    }
    dfs([...subNums, candidates[i]], i, target - candidates[i], res)
    dfs(subNums, i + 1, target, res)
    return res
  })([], 0, target, [])
}
console.log(combinationSum([2, 3, 5], 1))
