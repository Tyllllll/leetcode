/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  if (s.length > 12) {
    return []
  }
  const res = []
  function dfs(arr, i) {
    if (arr.length == 4 && i >= s.length) {
      res.push(arr.join('.'))
      return
    }
    if (i >= s.length) {
      return
    }
    let str = arr[arr.length - 1]
    if (str[0] !== '0' && (str + s[i]) * 1 <= 255) {
      str += s[i]
      dfs([...arr.slice(0, arr.length - 1), str], i + 1)
    }
    str = arr[arr.length - 1]
    if (str !== '') {
      dfs([...arr, ''], i)
    }
  }
  dfs([''], 0)
  return res
}
console.log(restoreIpAddresses('25525511135'))
