/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  const arr = tiles.split('').sort((a, b) => (a > b ? 1 : -1))
  const usedArr = new Array(arr.length).fill(false)
  let res = 0
  const dfs = () => {
    let last = '*'
    for (let i = 0; i < arr.length; i++) {
      if (usedArr[i] || last === arr[i]) {
        continue
      }
      res++
      usedArr[i] = true
      dfs()
      usedArr[i] = false
      last = arr[i]
    }
  }
  dfs()
  return res
}
console.log(numTilePossibilities('AAABBC'))
