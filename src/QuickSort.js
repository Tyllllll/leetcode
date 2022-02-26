import { swap } from '../modules/utils'
function QuickSort(nums) {
  const qsort = (nums, left, right) => {
    if (left >= right) {
      return
    }
    let i = left
    let j = right
    const temp = nums[left]
    while (i < j) {
      while (i < j && nums[j] >= temp) {
        j--
      }
      while (i < j && nums[i] <= temp) {
        i++
      }
      if (i < j) {
        swap(nums, i, j)
      }
    }
    swap(nums, left, i)
    qsort(nums, left, i)
    qsort(nums, i + 1, right)
  }
  qsort(nums, 0, nums.length - 1)
  return nums
}
export default QuickSort
