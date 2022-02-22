import { swap } from '../modules/utils'
function InsertSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    for (let j = i; j > 0; j--) {
      if (nums[j] < nums[j - 1]) {
        swap(nums, j, j - 1)
      }
    }
  }
  return nums
}
export default InsertSort
