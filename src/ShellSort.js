function ShellSort(nums) {
  for (let gap = nums.length >> 1; gap > 0; gap >>= 1) {
    for (let i = gap; i < nums.length; i++) {
      let j = i - gap
      const curNum = nums[i]
      while (j >= 0 && nums[j] > curNum) {
        nums[j + gap] = nums[j]
        j -= gap
      }
      nums[j + gap] = curNum
    }
  }
  return nums
}
export default ShellSort
