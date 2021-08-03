/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
  let res = false
  const sum = matchsticks.reduce((a, b) => a + b)
  if (sum % 4 !== 0) {
    return res
  }
  const sideLenth = sum / 4
  const dfs = (culLength, i, alternative, success) => {
    if (res) {
      return
    }
    if (success === 4) {
      res = true
      return
    }
    if (i > matchsticks.length) {
      return
    }
    if (culLength === sideLenth) {
      dfs(0, 0, success + 1)
    }
    if (culLength + matchsticks[i] <= sideLenth) {
      const [num] = matchsticks.splice(i, 1)
      dfs(culLength + num, i, success)
      dfs(culLength, i + 1, success)
    }
  }
  dfs(0, 0, 0)
  return res
}
console.log(makesquare([5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3]))
