/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function (n, k) {
  const res = []
  const dfs = (num, length) => {
    if (length >= n) {
      res.push(num)
      return
    }
    if (num === 0) {
      return
    }
    const curNum = num % 10
    if (k !== 0 && curNum - k >= 0) {
      dfs(num * 10 + curNum - k, length + 1)
    }
    if (curNum + k < 10) {
      dfs(num * 10 + curNum + k, length + 1)
    }
  }
  for (let i = 0; i < 10; i++) {
    dfs(i, 1)
  }
  return res
}
console.log(numsSameConsecDiff(2, 2))
