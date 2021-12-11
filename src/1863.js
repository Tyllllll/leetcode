/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  let ans = 0
  function backTrace(val, i) {
    if (i === nums.length) {
      ans += val
      return
    }
    backTrace(val ^ nums[i], i + 1)
    backTrace(val, i + 1)
  }
  backTrace(0, 0)
  return ans
}

console.log(subsetXORSum([3, 4, 5, 6, 7, 8]))
