/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  const ans = ['0']
  for (const ch of num) {
    while (k && ch < ans[ans.length - 1]) {
      ans.pop()
      k--
      if (!k) {
        break
      }
    }
    ans.push(ch)
  }
  while (k-- > 0) {
    ans.pop()
  }
  while (ans[0] === '0') {
    ans.shift()
  }
  return ans.join('') === '' ? '0' : ans.join('')
}
