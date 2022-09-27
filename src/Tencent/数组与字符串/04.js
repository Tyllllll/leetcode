/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const sTrim = s.trim()
  let status = 0
  let isPositive = true
  let num = 0
  let i = 0
  while (i < sTrim.length) {
    switch (status) {
      case 0:
        if (sTrim[i] === '-') {
          isPositive = false
          i++
        } else if (sTrim[i] === '+') {
          i++
        }
        status = 1
        break
      case 1:
        if (/[0-9]/.test(sTrim[i])) {
          num = num * 10 + sTrim[i] * 1
        } else {
          status = 2
        }
        i++
        break
      case 2:
        i++
        break
    }
  }
  if (isPositive) {
    num = num > 2 ** 31 - 1 ? 2 ** 31 - 1 : num
  } else {
    num = -num < -1 * 2 ** 31 ? -1 * 2 ** 31 : -num
  }
  return num
}

export default myAtoi
