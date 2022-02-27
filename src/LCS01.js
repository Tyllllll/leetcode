/**
 * @param {number} n
 * @return {number}
 */
var leastMinutes = function (n) {
  return Math.ceil(Math.log2(n)) + 1
}
export default leastMinutes
