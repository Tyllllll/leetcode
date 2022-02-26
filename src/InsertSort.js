function InsertSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1
    const curNum = nums[i]
    while (j >= 0 && nums[j] > curNum) {
      nums[j + 1] = nums[j]
      j--
    }
    nums[j + 1] = curNum
  }
  return nums
}
export default InsertSort
