/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function (nums, k) {
  let array = []
  for (const index in nums) {
    if (array.length && nums[index] < array[0] && nums.length - index >= k) {
      array = []
    }
    while (
      array.length &&
      array[array.length - 1] > nums[index] &&
      nums.length - index + array.length > k
    ) {
      array.pop()
    }
    if (array.length < k) {
      array.push(nums[index])
    }
  }
  return array
}
