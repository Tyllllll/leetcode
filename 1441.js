/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  const result = []
  let num = 1
  for (const i of target) {
    while (true) {
      if (num++ === i) {
        result.push('Push')
        break
      } else {
        result.push('Push')
        result.push('Pop')
      }
    }
  }
  return result
}
