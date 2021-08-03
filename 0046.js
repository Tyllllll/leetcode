/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  return (function backTrace(arr, res) {
    if (arr.length === nums.length) {
      res.push(arr)
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (arr.indexOf(nums[i]) < 0) {
        backTrace([...arr, nums[i]], res)
      }
    }
    return res
  })([], [])
}
console.log(permute([1, 2, 3]))
