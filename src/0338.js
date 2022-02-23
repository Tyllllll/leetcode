/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const dp = []
  dp[0] = 0
  let temp
  for (let i = 1; i <= n; i++) {
    if ((i & (i - 1)) === 0) {
      dp[i] = 1
      temp = i
    } else {
      dp[i] = 1 + dp[i - temp]
    }
  }
  return dp
}
export default countBits
