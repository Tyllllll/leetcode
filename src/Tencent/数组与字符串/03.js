/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const dp = []
  let start = 0
  let end = 0
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (dp[j] === undefined) {
        dp[j] = []
        dp[j][j] = true
        continue
      }
      if (s[i] === s[j]) {
        if (i - j < 2) {
          dp[i][j] = true
        } else {
          dp[i][j] = dp[i - 1][j + 1]
        }
      } else {
        dp[i][j] = false
      }
      if (dp[i][j]) {
        if (i - j > end - start) {
          end = i
          start = j
        }
      }
    }
  }
  return s.slice(start, end + 1)
}
export default longestPalindrome
