/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var findTargetSumWays = function (nums, target) {
//   let ans = 0
//   const dfs = (sum, i) => {
//     if (i >= nums.length) {
//       if (sum === target) {
//         ans++
//       }
//       return
//     }
//     dfs(sum + nums[i], i + 1)
//     dfs(sum - nums[i], i + 1)
//   }
//   dfs(0, 0)
//   return ans
// }
var findTargetSumWays = function (nums, target) {
  const dp = [[target + nums[nums.length - 1], target - nums[nums.length - 1]]]
  for (let i = nums.length - 2; i >= 0; i--) {
    const indexInDp = nums.length - i - 1
    if (dp[indexInDp] === undefined) {
      dp[indexInDp] = []
    }
    for (const iterator of dp[indexInDp - 1]) {
      dp[indexInDp].push(iterator + nums[i])
      dp[indexInDp].push(iterator - nums[i])
    }
  }
  return dp[dp.length - 1].reduce((count, val) => {
    if (val === 0) {
      count++
    }
    return count
  }, 0)
}
export default findTargetSumWays