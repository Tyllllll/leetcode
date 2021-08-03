/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let j = 0
  for (let i = 0; i < s.length; i++) {
    while (s[i] !== t[j]) {
      j++
      if (j >= t.length) {
        return false
      }
    }
    j++
  }
  return true
}
