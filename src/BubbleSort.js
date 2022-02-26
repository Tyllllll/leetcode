import { swap } from '../modules/utils'
function BubbleSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        swap(nums, i, j)
      }
    }
  }
  return nums
}
export default BubbleSort
