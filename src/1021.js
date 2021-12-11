/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  let result = ''
  let count = 0
  let prev, cur
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      count++
      // 上升沿
      if (count === 1) {
        prev = i + 1
      }
    } else {
      count--
      // 下降沿
      if (count === 0) {
        for (let j = prev; j < i; j++) {
          result += S[j]
        }
      }
    }
  }
  return result
}
