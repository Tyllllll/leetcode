/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function (S) {
  const stack = []
  for (const ch of S) {
    if (ch === '(') {
      stack.push(1)
    } else {
      if (stack[stack.length - 1] === 1) {
        stack.pop()
      } else {
        stack.push(2)
      }
    }
  }
  return stack.length
}
