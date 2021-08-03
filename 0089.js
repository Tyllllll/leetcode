/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  if (!n) return [0]
  const arr = new Array(n).fill(0)
  const res = [0]
  while (true) {
    arr[0] = Number(!arr[0])
    res.push(
      arr.reduce((prev, val, index, array) => prev + val * 2 ** (array.length - index - 1), 0)
    )
    // console.log(arr)
    if (res.length === 2 ** n) break
    for (let i = 0; i < arr.length - 1; i++) {
      const element = arr[i]
      if (element) {
        arr[i + 1] = Number(!arr[i + 1])
        break
      }
    }
    res.push(
      arr.reduce((prev, val, index, array) => prev + val * 2 ** (array.length - index - 1), 0)
    )
    // console.log(arr)
    if (res.length === 2 ** n) break
  }
  return res
}
console.log(grayCode(3))

// 二进制数组转十进制数
// [1, 0, 1].reduce((prev, val, index, array) => prev + val * 2 ** (array.length - index - 1), 0)
