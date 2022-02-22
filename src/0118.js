/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (1 === numRows) {
    return [[1]]
  }
  if (2 === numRows) {
    return [[1], [1, 1]]
  }
  const res = [[1], [1, 1]]
  for (let i = 2; i < numRows; i++) {
    res[i] = []
    res[i][0] = 1
    res[i][i] = 1
    for (let j = 1; j < Math.ceil((i + 1) / 2); j++) {
      res[i][j] = res[i - 1][j - 1] + res[i - 1][j]
      res[i][i - j] = res[i - 1][j - 1] + res[i - 1][j]
    }
  }
  return res
}
export default generate
