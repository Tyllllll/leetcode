/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length
  const dp = []
  for (let i = 0; i < len; i++) {
    if (dp[i] === undefined) {
      dp[i] = new Array(i).fill(false)
    }
    dp[i][i] = true
  }
  let maxStart = 0
  let maxEnd = 0
  for (let curLen = 2; curLen <= len; curLen++) {
    for (let i = 0; i < len - 1; i++) {
      const j = i + curLen - 1
      if (s[i] === s[j]) {
        if (j - i < 2) {
          dp[j][i] = true
        } else {
          dp[j][i] = dp[j - 1][i + 1]
        }
        if (dp[j][i] && j - i > maxEnd - maxStart) {
          maxStart = i
          maxEnd = j
        }
      }
    }
  }
  return s.slice(maxStart, maxEnd + 1)
}
export default longestPalindrome
