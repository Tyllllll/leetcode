/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function (n) {
  const res = []
  const dfs = (arr) => {
    if (arr.length >= n) {
      res.push(arr)
      return
    }
    for (let i = 0; i < n; i++) {
      const num = i + 1
      const index = arr.length + 1
      if (arr.indexOf(num) < 0) {
        if (num % index === 0 || index % num === 0) {
          dfs([...arr, num])
        }
      }
    }
  }
  dfs([])
  return res.length
}
console.log(countArrangement(4))
