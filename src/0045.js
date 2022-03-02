/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const len = nums.length
  let step = 0
  let end = 0
  let max = 0
  for (let i = 0; i < len - 1; i++) {
    max = Math.max(max, i + nums[i])
    if (i === end) {
      end = max
      step++
    }
  }
  return step
}
// var jump = function (nums) {
//   const len = nums.length
//   const dp = new Array(len)
//   dp[0] = 0
//   for (let i = 0; i < len - 1; i++) {
//     let count = nums[i]
//     while (count) {
//       if (dp[i + count] === undefined) {
//         dp[i + count] = dp[i] + 1
//       } else {
//         dp[i + count] = Math.min(dp[i] + 1, dp[i + count])
//       }
//       count--
//     }
//   }
//   return dp[len - 1]
// }
export default jump
