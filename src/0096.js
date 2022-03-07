/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const dp = [1]
  for (let i = 1; i < n; i++) {
    dp[i] = 2 * dp[i - 1]
    for (let j = 0; j < i - 1; j++) {
      dp[i] += dp[j] * dp[i - 2 - j]
    }
  }
  return dp[n - 1]
}
export default numTrees
