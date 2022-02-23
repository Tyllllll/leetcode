/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const dp = []
  dp[0] = cost[0]
  dp[1] = cost[1]
  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 2], dp[i - 1]) + (cost[i] === undefined ? 0 : cost[i])
  }
  return dp[cost.length]
}
export default minCostClimbingStairs
