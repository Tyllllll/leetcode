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
    if (success === 4 && alternative.length === 0) {
      res = true
      return
    }
    if (i > alternative.length) {
      return
    }
    if (culLength === sideLenth) {
      dfs(0, 0, alternative, success + 1)
    }
    if (culLength + alternative[i] <= sideLenth) {
      const newAlternative = alternative.slice()
      const [num] = newAlternative.splice(i, 1)
      dfs(culLength + num, i, newAlternative, success)
    }
    dfs(culLength, i + 1, alternative, success)
  }
  dfs(0, 0, matchsticks, 0)
  return res
}
console.log(makesquare([1, 1, 2, 2, 2]))
// console.log(makesquare([3, 3, 3, 3, 4]))
// console.log(makesquare([5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3]))
