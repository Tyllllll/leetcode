/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, relation, k) {
  const obj = {}
  for (let i = 0; i < n; i++) {
    obj[i] = []
  }
  for (let i = 0; i < relation.length; i++) {
    const from = relation[i][0]
    const to = relation[i][1]
    obj[from].push(to)
  }
  const dp = [[]]
  dp[0][0] = 1
  for (let i = 1; i < n; i++) {
    dp[0][i] = 0
  }
  for (let i = 1; i <= k; i++) {
    dp[i] = new Array(n).fill(0)
    for (let j = 0; j < n; j++) {
      if (dp[i - 1][j] > 0) {
        obj[j].forEach((to) => {
          dp[i][to] += dp[i - 1][j]
        })
      }
    }
  }
  return dp[k][n - 1]
}
export default numWays
