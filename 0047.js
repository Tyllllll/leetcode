/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b)
  return (function backTrace(arrIndex, res) {
    if (arrIndex.length === nums.length) {
      res.push(arrIndex.map((val) => nums[val]))
      return
    }
    const usedOjb = {}
    for (let i = 0; i < nums.length; i++) {
      if (arrIndex.indexOf(i) < 0) {
        if (usedOjb[nums[i - 1]] && nums[i] === nums[i - 1]) continue
        usedOjb[nums[i]] = true
        backTrace([...arrIndex, i], res)
      }
    }
    return res
  })([], [])
}
console.log(permuteUnique([1, 1, 1, 2]))
