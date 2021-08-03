/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
  const stack = []
  const res = Array(n).fill(0)
  let culTime = 0
  for (const str of logs) {
    const value = str.split(':')
    if (value[1] === 'start') {
      if (stack.length && Number(value[2]) !== culTime) {
        res[stack[stack.length - 1]] += value[2] - culTime
      }
      culTime = Number(value[2])
      stack.push(value[0])
    } else {
      res[value[0]] += value[2] - culTime + 1
      culTime = Number(value[2]) + 1
      stack.pop()
    }
  }
  return res
}
