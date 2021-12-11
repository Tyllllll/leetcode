/**
 * @param {string} s
 * @return {string[]}
 */
var ambiguousCoordinates = function (s) {
  const res = []
  for (let i = 2; i < s.length - 1; i++) {
    const x = s.slice(1, i)
    if (x.length > 1 && Number(x) === 0) {
      continue
    }
    const y = s.slice(i, s.length - 1)
    if (y.length > 1 && Number(y) === 0) {
      continue
    }
    for (let m = 0; m < x.length; m++) {
      const num1 = m === 0 ? x : x.slice(0, m) + '.' + x.slice(m)
      if (String(Number(num1)) !== num1) {
        continue
      }
      for (let n = 0; n < y.length; n++) {
        const num2 = n === 0 ? y : y.slice(0, n) + '.' + y.slice(n)
        if (String(Number(num2)) !== num2) {
          continue
        }
        res.push(`(${num1}, ${num2})`)
      }
    }
  }
  return res
}
console.log(ambiguousCoordinates('(100)'))
