/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (0 === rowIndex) {
    return [1]
  }
  if (1 === rowIndex) {
    return [1, 1]
  }
  const res = [[1], [1, 1]]
  for (let i = 2; i <= rowIndex; i++) {
    res[i] = []
    res[i][0] = 1
    res[i][i] = 1
    for (let j = 1; j < Math.ceil((i + 1) / 2); j++) {
      res[i][j] = res[i - 1][j - 1] + res[i - 1][j]
      res[i][i - j] = res[i - 1][j - 1] + res[i - 1][j]
    }
  }
  return res[rowIndex]
}
export default getRow
