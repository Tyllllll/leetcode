/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const len = s.length
  const dp = new Array(len).fill(0)
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '0') {
      dp[i] += dp[i - 1] === undefined ? 1 : dp[i - 1]
    }
    if (i > 0 && s[i - 1] !== '0' && parseInt(s[i - 1] + s[i]) <= 26) {
      dp[i] += dp[i - 2] === undefined ? 1 : dp[i - 2]
    }
  }
  return dp[len - 1]
}
export default numDecodings
