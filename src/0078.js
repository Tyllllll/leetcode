/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = []
  let arr
  for (let i = 0; i < 2 ** nums.length; i++) {
    arr = []
    for (let j = 0; j < nums.length; j++) {
      if ((2 ** j) & i) {
        arr.push(nums[j])
      }
    }
    res.push(arr)
  }
  return res
}
console.log(subsets([0]))
