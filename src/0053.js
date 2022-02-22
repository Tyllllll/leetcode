/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const dp = []
  dp[0] = nums[0]
  let res = nums[0]
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])
    res = dp[i] > res ? dp[i] : res
  }
  return res
}
export default maxSubArray
