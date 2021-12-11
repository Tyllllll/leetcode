/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b)
  return (function dfs(arr, choosePre, i, res) {
    if (i === nums.length) {
      res.push([...arr])
      return
    }
    dfs(arr, false, i + 1, res)
    if (!choosePre && nums[i - 1] === nums[i]) {
      return
    }
    dfs([...arr, nums[i]], true, i + 1, res)
    return res
  })([], false, 0, [])
}

console.log(subsetsWithDup([1, 1, 3, 1]))
