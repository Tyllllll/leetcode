/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  const arrayLeft = []
  const arrayRight = []
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      count++
      arrayLeft.push(i)
    } else if (s[i] === ')') {
      if (count <= 0) {
        s = s.slice(0, i) + s.slice(i + 1, s.length)
        i--
      } else {
        count--
        arrayRight.push(i)
      }
    }
  }
  if (count > 0) {
    while (count) {
      let index = arrayLeft.pop()
      s = s.slice(0, index) + s.slice(index + 1, s.length)
      count--
    }
  } else if (count < 0) {
    while (count) {
      let index = arrayRight.shift()
      s = s.slice(0, index) + s.slice(index + 1, s.length)
      count++
    }
  }
  return s
}
