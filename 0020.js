/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []
  for (const i of s) {
    switch (i) {
      case '(':
      case '[':
      case '{':
        stack.push(i)
        break
      case ')':
        if (stack[stack.length - 1] === '(') {
          stack.pop()
        } else {
          return false
        }
        break
      case ']':
        if (stack[stack.length - 1] === '[') {
          stack.pop()
        } else {
          return false
        }
        break
      case '}':
        if (stack[stack.length - 1] === '{') {
          stack.pop()
        } else {
          return false
        }
        break
    }
  }
  if (stack.length) {
    return false
  }
  return true
}
