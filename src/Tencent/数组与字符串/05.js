/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const count = strs.reduce((prev, val, index, arr) => {
    for (let i = 0; i < Math.min(arr[index], arr[index - 1]); i++) {
      if (arr[index][i] === arr[index - 1][i]) {
        num++
      }
    }
    return num
  })
  return strs[0].slice(0, count + 2)
}
