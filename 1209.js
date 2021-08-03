/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  const stack = []
  for (const ch of s) {
    if (stack.length && stack[stack.length - 1].ch === ch) {
      stack[stack.length - 1].count++
      if (stack[stack.length - 1].count === k) {
        stack.pop()
      }
    } else {
      stack.push({ ch: ch, count: 1 })
    }
  }
  return stack
    .map((val) => {
      let str = ''
      while (val.count--) {
        str += val.ch
      }
      return str
    })
    .join('')
}
