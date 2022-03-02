/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const len = nums.length
  let max = 0
  for (let i = 0; i < len - 1; i++) {
    if (max < i) {
      return false
    }
    max = Math.max(max, i + nums[i])
    if (max >= len - 1) {
      return true
    }
  }
  if (max >= len - 1) {
    return true
  }
  return false
}
export default canJump
