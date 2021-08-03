/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const m = new Map()
  let [max, count] = [0, 0]
  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
    if (m.has(ch)) {
      i = m.get(ch)
      m.clear()
      max = count > max ? count : max
      count = 0
    } else {
      m.set(ch, i)
      count++
    }
  }
  return count > max ? count : max
}

console.log(lengthOfLongestSubstring('dvdf'))
