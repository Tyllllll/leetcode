import { swap } from '../modules/utils'
function SelectSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < nums.length; j++) {
      minIndex = nums[minIndex] > nums[j] ? j : minIndex
    }
    if (i !== minIndex) {
      swap(nums, i, minIndex)
    }
  }
  return nums
}
export default SelectSort
