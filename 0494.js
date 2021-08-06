/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let ans = 0
  const dfs = (sum, i) => {
    if (i >= nums.length) {
      if (sum === target) {
        ans++
      }
      return
    }
    dfs(sum + nums[i], i + 1)
    dfs(sum - nums[i], i + 1)
  }
  dfs(0, 0)
  return ans
}
console.log(findTargetSumWays([1], 1))
