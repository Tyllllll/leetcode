import { swap } from '../modules/utils'
function ShellSort(nums) {
  for (let gap = Math.floor(nums.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < nums.length; i++) {
      for (let j = i; j >= 0; j -= gap) {
        if (nums[j - gap] > nums[j]) {
          swap(nums, j, j - gap)
        }
      }
    }
  }
  return nums
}
export default ShellSort
