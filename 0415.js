/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let ans = ''
  let carry = 0
  const isNum1Long = num1.length > num2.length
  for (let i = 0; i < (isNum1Long ? num2.length : num1.length); i++) {
    let temp = carry === 0 ? 0 : 1
    carry = 0
    temp += num1[num1.length - i - 1] * 1
    temp += num2[num2.length - i - 1] * 1
    if (temp > 9) {
      temp -= 10
      carry = 1
    }
    ans = temp + ans
  }
  let lastLength = isNum1Long ? num1.length - num2.length : num2.length - num1.length
  while (carry && lastLength) {
    lastLength--
    let temp = carry === 0 ? 0 : 1
    carry = 0
    temp += (isNum1Long ? num1[lastLength] : num2[lastLength]) * 1
    if (temp > 9) {
      temp -= 10
      carry = 1
    }
    ans = temp + ans
  }
  if (lastLength) {
    ans = (isNum1Long ? num1.slice(0, lastLength) : num2.slice(0, lastLength)) + ans
  }
  if (carry) ans = '1' + ans
  return ans
}
console.log(addStrings('9133', '0'))
