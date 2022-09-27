/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const o = { good: {}, bad: {} }
  // 后面用的
  const tempBad = {}
  let goodNum = 0
  let minute = 0
  for (let i = 0; i < grid.length; i++) {
    o.good[i] = []
    o.bad[i] = []
    tempBad[i] = []
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        o.good[i] = [...o.good[i], j]
        goodNum++
      }
      if (grid[i][j] === 2) {
        o.bad[i] = [...o.bad[i], j]
      }
    }
  }
  let effectedNum
  const dx = [1, -1, 0, 0]
  const dy = [0, 0, 1, -1]
  while (goodNum) {
    effectedNum = 0
    for (const i in o.bad) {
      const tempArr = o.bad[i]
      for (const j of tempArr) {
        for (let k = 0; k < 4; k++) {
          const curI = i * 1 + dx[k]
          const curJ = j * 1 + dy[k]
          if (curI < 0 || curI >= grid.length) {
            continue
          }
          if (curJ < 0 || curJ >= grid[0].length) {
            continue
          }
          const index = o.good[curI].indexOf(curJ)
          if (index > -1) {
            effectedNum++
            o.good[curI].splice(index, 1)
            goodNum--
            tempBad[curI].push(curJ)
          }
        }
      }
    }
    if (!effectedNum) {
      return -1
    }
    for (const i in tempBad) {
      if (tempBad[i].length) {
        o.bad[i] = tempBad[i]
        tempBad[i] = []
      }
    }
    minute++
  }
  return minute
}
export default orangesRotting
