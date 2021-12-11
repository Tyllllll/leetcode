/**
 * @param {string} num
 * @return {number[]}
 */
var splitIntoFibonacci = function (num) {
  let num1
  let num2
  let success = false
  const res = []
  const dfs = (str, i, arr) => {
    if (success) {
      return
    }
    if (i >= num.length) {
      const tempNum = str * 1
      if (arr[arr.length - 1] + arr[arr.length - 2] === tempNum) {
        success = true
        res.push(...arr)
        res.push(tempNum)
      }
      return
    }
    const tempNum = str === '' ? NaN : str * 1
    if (tempNum > 2 ** 31 - 1) {
      return
    }
    if (arr[arr.length - 1] + arr[arr.length - 2] === tempNum) {
      dfs('', i, [...arr, tempNum])
    } else {
      dfs(str + num[i], i + 1, arr)
    }
  }
  for (let i = 1; i < num.length; i++) {
    num1 = num.slice(0, i)
    if (String(Number(num1)) !== num1) {
      continue
    }
    for (let j = i + 1; j < num.length; j++) {
      num2 = num.slice(i, j)
      if (String(Number(num2)) !== num2) {
        continue
      }
      dfs('', j, [num1 * 1, num2 * 1])
      if (success) {
        break
      }
    }
    if (success) {
      break
    }
  }
  return res
}
console.log(
  splitIntoFibonacci(
    '539834657215398346785398346991079669377161950407626991734534318677529701785098211336528511'
  )
)
