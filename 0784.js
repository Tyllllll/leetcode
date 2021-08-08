/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  const res = []
  const dfs = (str, i) => {
    if (i >= s.length) {
      res.push(str)
      return
    }
    if (s[i] >= '0' && s[i] <= '9') {
      dfs(str + s[i], i + 1)
    } else {
      dfs(str + s[i].toLowerCase(), i + 1)
      dfs(str + s[i].toUpperCase(), i + 1)
    }
  }
  dfs('', 0)
  return res
}
console.log(letterCasePermutation('C'))
