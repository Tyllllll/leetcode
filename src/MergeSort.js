import { swap } from '../modules/utils'
function MergeSort(nums) {
  const merge = (nums, left, right, mid) => {
    const temp = []
    let i = left
    let j = mid + 1
    while (i <= mid && j <= right) {
      temp.push(nums[i] <= nums[j] ? nums[i++] : nums[j++])
    }
    while (i <= mid) {
      temp.push(nums[i++])
    }
    while (j <= right) {
      temp.push(nums[j++])
    }
    i = left
    while (i <= right) {
      nums[i] = temp[i - left]
      i++
    }
  }
  const msort = (nums, left, right) => {
    if (left >= right) {
      return
    }
    const mid = Math.floor((left + right) / 2)
    msort(nums, left, mid)
    msort(nums, mid + 1, right)
    merge(nums, left, right, mid)
  }
  msort(nums, 0, nums.length - 1)
  return nums
}
export default MergeSort
