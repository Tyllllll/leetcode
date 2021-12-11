/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
  let res = false
  const sum = nums.reduce((a, b) => a + b)
  if (sum % k !== 0) {
    return res
  }
  const sideLenth = sum / k
  const dfs = (culLength, i, alternative, success) => {
    if (res) {
      return
    }
    if (success === k && alternative.length === 0) {
      res = true
      return
    }
    if (i > alternative.length) {
      return
    }
    if (culLength === sideLenth) {
      dfs(0, 0, alternative, success + 1)
    }
    if (culLength + alternative[i] <= sideLenth) {
      const newAlternative = alternative.slice()
      const [num] = newAlternative.splice(i, 1)
      dfs(culLength + num, i, newAlternative, success)
    }
    dfs(culLength, i + 1, alternative, success)
  }
  dfs(0, 0, nums, 0)
  return res
}
console.log(canPartitionKSubsets([1, 1, 1, 1, 2, 2, 2, 2], 2))
