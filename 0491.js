/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  const res = []
  const dfs = (arr, i, isNew, curIndex) => {
    if (i > nums.length) {
      return
    }
    if (arr.length > 1 && isNew) {
      res.push(arr)
    }
    if (arr.length === 0 || arr[arr.length - 1] <= nums[i]) {
      dfs([...arr, nums[i]], i + 1, true, i)
    }
    let checkRepeat = true
    while (checkRepeat) {
      const check = () => {
        for (let j = curIndex + 1; j < i + 1; j++) {
          if (nums[j] !== undefined && nums[j] === nums[i + 1]) {
            return true
          }
        }
        return false
      }
      if (check()) {
        i++
      } else {
        checkRepeat = false
      }
    }
    dfs(arr, i + 1, false, curIndex)
  }
  dfs([], 0, false, -1)
  return res
}
console.log(findSubsequences([-1,0,0,0]))
