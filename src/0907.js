/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  const MOD = 1e9 + 7
  const stack = []
  let result = 0
  let dot = 0
  for (const num of arr) {
    let count = 1
    while (stack.length && stack[stack.length - 1].num > num) {
      let { num: tempNum, count: tempCount } = stack.pop()
      count += tempCount
      dot -= tempNum * tempCount
    }
    stack.push({ num: num, count: count })
    dot += num * count
    result += dot
    result %= MOD
  }
  return result
}
