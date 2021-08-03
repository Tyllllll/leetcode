/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []
  for (const ch of s) {
    stack.push(ch)
    while (
      stack.length > 2 &&
      stack[stack.length - 1] === 'c' &&
      stack[stack.length - 2] === 'b' &&
      stack[stack.length - 3] === 'a'
    ) {
      stack.pop()
      stack.pop()
      stack.pop()
    }
  }
  return !stack.length
}
