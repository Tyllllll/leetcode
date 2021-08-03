/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
  const sum = matchsticks.reduce((a, b) => a + b)
  if (sum % 4 !== 0) {
    return
  }
  const sideLenth = sum / 4
  const dfs = (arr, ) => {
    
  }
}
console.log(makesquare([1, 1, 2, 2, 2]))
console.log(makesquare([3, 3, 3, 3, 3]))
