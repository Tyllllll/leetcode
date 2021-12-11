/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const array = []
  for (const i of ops) {
    switch (i) {
      case '+':
        array.push(array[array.length - 1] + array[array.length - 2])
        break
      case 'D':
        array.push(array[array.length - 1] * 2)
        break
      case 'C':
        array.pop()
        break
      default:
        array.push(Number(i))
        break
    }
  }
  return array.reduce((prev, cur) => prev + cur)
}
