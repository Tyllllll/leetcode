/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
  let res = false
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length - 1; j++) {
      const num1Str = num.slice(0, i + 1)
      const num2Str = num.slice(i + 1, j + 1)
      if (num1Str.length > 1 && num1Str[0] === '0') {
        continue
      }
      if (num2Str.length > 1 && num2Str[0] === '0') {
        continue
      }
      num1 = num1Str * 1
      num2 = num2Str * 1
      dfs('', j + 1, num1, num2)
      if (res) {
        return res
      }
    }
  }
  return res

  function dfs(str, i, add1, add2) {
    if (res) {
      return
    }
    if (str.length > 1 && str[0] === '0') {
      return
    }
    const tempNum = str === '' ? -1 : str * 1
    if (i >= num.length) {
      if (tempNum === add1 + add2) {
        res = true
      }
      return
    }
    if (tempNum > add1 + add2) {
      return
    } else if (tempNum < add1 + add2) {
      dfs(str + num[i], i + 1, add1, add2)
    } else {
      dfs('', i, add2, add1 + add2)
    }
  }
}

console.log(isAdditiveNumber('0235813'))
