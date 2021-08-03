/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  const stack = []
  let temp
  for (const ch of s) {
    if (ch === ')') {
      temp = []
      while (stack[stack.length - 1] !== '(') {
        temp.push(stack.pop())
      }
      stack.pop()
      stack.push(...temp)
    } else {
      stack.push(ch)
    }
  }
  return stack.join('')
}
