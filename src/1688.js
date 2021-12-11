/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  let ans = 0
  while (n > 1) {
    if (n % 2) {
      // 奇数
      n = (n + 1) / 2
      ans += n - 1
    } else {
      // 偶数
      n /= 2
      ans += n
    }
  }
  return ans
}

console.log(numberOfMatches(14))