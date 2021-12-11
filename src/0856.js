/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function (S) {
  let deep = 0
  let score = 0
  for (const i in S) {
    if (S[i] === '(') {
      deep += 1
    } else {
      deep -= 1
      if (S[i - 1] === '(') {
        score += 1 << deep
      }
    }
  }
  return score
}
