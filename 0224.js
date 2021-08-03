/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const ops = [1]
  let sign = 1

  let ret = 0
  const n = s.length
  let i = 0
  while (i < n) {
    if (s[i] === ' ') {
      i++
    } else if (s[i] === '+') {
      sign = ops[ops.length - 1]
      i++
    } else if (s[i] === '-') {
      sign = -ops[ops.length - 1]
      i++
    } else if (s[i] === '(') {
      ops.push(sign)
      i++
    } else if (s[i] === ')') {
      ops.pop()
      i++
    } else {
      let num = 0
      while (i < n && !isNaN(Number(s[i])) && s[i] !== ' ') {
        num = num * 10 + s[i].charCodeAt() - '0'.charCodeAt()
        i++
      }
      ret += sign * num
    }
  }
  return ret
}
//  var calculate = function(s) {
//   const stack = [1]
//   let sign = 1
//   let ans = 0
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === ' ') {
//       continue
//     }
//     if (s[i] === '+') {
//       sign = stack[stack.length - 1]
//     } else if (s[i] === '-') {
//       sign = -stack[stack.length - 1]
//     } else if (s[i] === '(') {
//       stack.push(sign)
//     } else if (s[i] === ')') {
//       stack.pop()
//     } else {
//       const ch = s.substring(i).match(/\d+/)[0]
//       i += ch.length - 1
//       ans += sign * parseInt(ch)
//     }
//   }
//   return ans
// };
