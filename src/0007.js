/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const isNegative = x < 0
  const str = isNegative ? String(x).slice(1) : String(x)
  const resArray = []
  for (let i = str.length - 1; i >= 0; i--) {
    resArray.push(str[i])
  }
  let res = resArray.join('') * 1
  if (isNegative) {
    res = -res
  }
  if (res < -1 * 2 ** 31 || res > 2 ** 31 - 1) {
    res = 0
  }
  return res
}
console.log(reverse(-123))
