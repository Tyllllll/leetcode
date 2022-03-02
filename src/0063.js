/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  const dp = [[obstacleGrid[0][0] === 1 ? 0 : 1]]
  for (let i = 1; i < m; i++) {
    if (dp[i] === undefined) {
      dp[i] = []
    }
    dp[i][0] = obstacleGrid[i][0] === 1 ? 0 : dp[i - 1][0]
  }
  for (let i = 1; i < n; i++) {
    dp[0][i] = obstacleGrid[0][i] === 1 ? 0 : dp[0][i - 1]
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[m - 1][n - 1]
}
export default uniquePathsWithObstacles
