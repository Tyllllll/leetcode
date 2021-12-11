/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const row = board.length
  const column = board[0].length
  const searchedArr = []
  const direction = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]
  for (let i = 0; i < row; i++) {
    searchedArr[i] = new Array(column).fill(false)
  }

  function backTrace(str, num, x, y) {
    if (str === word) {
      res = true
      return
    }
    if (x < 0 || x >= row) return
    if (y < 0 || y >= column) return
    if (searchedArr[x][y]) return
    if (board[x][y] === word[num]) {
      searchedArr[x][y] = true
      for (const [dx, dy] of direction) {
        backTrace(str + board[x][y], num + 1, x + dx, y + dy)
        if (res) return res
      }
      searchedArr[x][y] = false
    }
    return res
  }

  let res = false
  // 每个起点跑一边
  for (i = 0; i < row; i++) {
    for (j = 0; j < column; j++) {
      backTrace('', 0, i, j)
      if (res) return res
    }
  }
  return res
}
console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCES'
  )
)
