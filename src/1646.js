/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
  if (0 === n) {
    return 0
  }
  const dp = []
  dp[0] = 0
  dp[1] = 1
  let max = 1
  for (let i = 2; i <= n; i++) {
    if (i % 2) {
      dp[i] = dp[(i - 1) >> 1] + dp[((i - 1) >> 1) + 1]
    } else {
      dp[i] = dp[i >> 1]
    }
    max = Math.max(dp[i], max)
  }
  return max
}
export default getMaximumGenerated
