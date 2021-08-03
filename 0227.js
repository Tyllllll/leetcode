/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const array = []
  let sign = '+'
  for (const val of s.match(/\d+|[+\-*\/]/g)) {
    const num = parseInt(val)
    if (!Number.isInteger(num)) {
      sign = val
    } else {
      switch (sign) {
        case '+':
          array.push(num)
          break
        case '-':
          array.push(-num)
          break
        case '*':
          array.push(array.pop() * num)
          break
        case '/':
          array.push((array.pop() / num) | 0)
          break
      }
    }
  }
  return array.reduce((prev, cul) => prev + cul)
}
