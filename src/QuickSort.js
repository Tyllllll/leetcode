import { swap } from '../modules/utils'
function QuickSort(nums) {
  const qsort = (nums, low, high) => {
    if (low > high) {
      return
    }
    let i = low
    let j = high
    while (i < j) {
      while (nums[low] <= nums[j] && i < j) {
        j--
      }
      while (nums[low] >= nums[i] && i < j) {
        i++
      }
      if (i < j) {
        swap(nums, i, j)
      }
    }
    swap(nums, i, low)
    qsort(nums, low, i - 1)
    qsort(nums, i + 1, high)
  }
  qsort(nums, 0, nums.length - 1)
  return nums
}
export default QuickSort
