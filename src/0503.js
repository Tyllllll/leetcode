/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const stack = []
  const res = Array(nums.length).fill(-1)
  for (let i = 0; i < 2 * nums.length; i++) {
    while (stack.length !== 0 && nums[i % nums.length] > nums[stack[stack.length - 1]]) {
      res[stack[stack.length - 1]] = nums[i % nums.length]
      stack.pop()
    }
    stack.push(i % nums.length)
  }
  return res
}
