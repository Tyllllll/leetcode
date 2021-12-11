/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  if (nums.length < 3) {
    return false
  }
  const stack = []
  const minNum = []
  minNum[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    minNum[i] = Math.min(nums[i], minNum[i - 1])
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > minNum[i]) {
      while (stack.length && stack[stack.length - 1] <= minNum[i]) {
        stack.pop()
      }
      if (stack.length && stack[stack.length - 1] < nums[i]) {
        return true
      }
      stack.push(nums[i])
    }
  }
  return false
}
