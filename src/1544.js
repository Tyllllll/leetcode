/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  const stack = []
  for (const i of s) {
    if (stack.length >= 1) {
      if (
        i.toLowerCase() === stack[stack.length - 1].toLowerCase() &&
        i !== stack[stack.length - 1]
      ) {
        stack.pop()
      } else {
        stack.push(i)
      }
    } else {
      stack.push(i)
    }
  }
  return stack.join('')
}
