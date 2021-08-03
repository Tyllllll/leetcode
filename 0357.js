/**
 * @param {number} n
 * @return {number}
 */
// 1->10
// 2->9*9+10=91
// 3->9*9*8+91=739
// 4->9*9*8*7+739
var countNumbersWithUniqueDigits = function (n) {
  if (!n) {
    return 1
  }
  let res = 10
  for (let i = 1; i < n; i++) {
    let temp = 9
    for (let j = 0; j < i; j++) {
      temp *= 9 - j
    }
    res += temp
  }
  return res
}

console.log(countNumbersWithUniqueDigits(3))
