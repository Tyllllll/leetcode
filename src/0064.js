/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const dp = [[grid[0][0]]]
  for (let i = 1; i < m; i++) {
    if (dp[i] === undefined) {
      dp[i] = []
    }
    dp[i][0] = dp[i - 1][0] + grid[i][0]
  }
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j]
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
    }
  }
  return dp[m - 1][n - 1]
}
export default minPathSum
