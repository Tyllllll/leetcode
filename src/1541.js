/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
  let balance = 0
  let result = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      balance += 2
    } else {
      while (balance <= 0) {
        // 插一个左括号
        result += 1
        balance += 2
      }
      if (s[i + 1] === ')') {
        balance -= 2
        i++
      } else {
        // 插一个右括号
        balance -= 2
        result += 1
      }
    }
  }
  return result + balance
}
