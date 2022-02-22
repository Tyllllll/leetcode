// /**
//  * @param {number[]} matchsticks
//  * @return {boolean}
//  */
// var makesquare = function (matchsticks) {
//   let res = false
//   const sum = matchsticks.reduce((a, b) => a + b)
//   if (sum % 4 !== 0) {
//     return res
//   }
//   const sideLenth = sum / 4
//   const dfs = (culLength, i, alternative, success) => {
//     if (res) {
//       return
//     }
//     if (success === 4 && alternative.length === 0) {
//       res = true
//       return
//     }
//     if (i > alternative.length) {
//       return
//     }
//     if (culLength === sideLenth) {
//       dfs(0, 0, alternative, success + 1)
//     }
//     if (culLength + alternative[i] <= sideLenth) {
//       const newAlternative = alternative.slice()
//       const [num] = newAlternative.splice(i, 1)
//       dfs(culLength + num, i, newAlternative, success)
//     }
//     dfs(culLength, i + 1, alternative, success)
//   }
//   dfs(0, 0, matchsticks, 0)
//   return res
// }
/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
  if (matchsticks.length < 4) {
    return false
  }
  const sum = matchsticks.reduce((a, b) => a + b)
  if (sum % 4 !== 0) {
    return false
  }
  const sideLength = sum / 4
  const ok_subset = []
  const ok_half = []
  for (let i = 0; i < 1 << matchsticks.length; i++) {
    let temp = 0
    for (let j = 0; j < matchsticks.length; j++) {
      if (i & (1 << j)) {
        temp += matchsticks[j]
      }
    }
    if (temp === sideLength) {
      ok_subset.push(i)
    }
  }
  for (let i = 0; i < ok_subset.length; i++) {
    for (let j = i + 1; j < ok_subset.length; j++) {
      if ((ok_subset[i] & ok_subset[j]) === 0) {
        ok_half.push(ok_subset[i] | ok_subset[j])
      }
    }
  }
  for (let i = 0; i < ok_half.length; i++) {
    for (let j = i + 1; j < ok_half.length; j++) {
      if ((ok_half[i] & ok_half[j]) === 0) {
        return true
      }
    }
  }
  return false
}
console.log(makesquare([1, 1, 2, 2, 2]))
// console.log(makesquare([3, 3, 3, 3, 4]))
// console.log(makesquare([5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3]))
