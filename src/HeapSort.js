import { swap } from '../modules/utils'
function HeapSort(nums) {
  let len = nums.length
  const isValidIndex = (index) => index >= 0 && index < len
  const getLeftChildIndex = (index) => (index << 1) + 1
  const getRightChildIndex = (index) => (index << 1) + 2
  const shiftDown = (index) => {
    const leftIndex = getLeftChildIndex(index)
    const rightIndex = getRightChildIndex(index)
    if (!isValidIndex(leftIndex) || !isValidIndex(rightIndex)) {
      return
    }
    if (nums[index] < nums[leftIndex]) {
      swap(nums, index, leftIndex)
      shiftDown(leftIndex)
    }
    if (nums[index] < nums[rightIndex]) {
      swap(nums, index, rightIndex)
      shiftDown(rightIndex)
    }
  }
  // 建堆
  for (let i = nums.length >> 1; i >= 0; i--) {
    shiftDown(i)
  }
  // 调整
  for (let i = nums.length - 1; i > 0; i--) {
    swap(nums, 0, i)
    len--
    shiftDown(0)
  }
  return nums
}
export default HeapSort
