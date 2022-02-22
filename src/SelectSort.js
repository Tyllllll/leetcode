import { swap } from '../modules/utils'
function SelectSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[minIndex] > nums[j]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      swap(nums, i, minIndex)
    }
  }
  return nums
}
export default SelectSort
