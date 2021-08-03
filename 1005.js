/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function (A, K) {
  while (K--) {
    A.sort((a, b) => a - b)
    A[0] = -A[0]
  }
  return A.reduce((prev, val) => prev + val)
}

console.log(largestSumAfterKNegations([2,-3,-1,5,-4], 2))
