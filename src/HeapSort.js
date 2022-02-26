import { swap } from '../modules/utils'
function HeapSort(nums) {
  let len = nums.length
  const isValidIndex = (index) => index >= 0 && index < len
  const getLeftChildIndex = (index) => (index << 1) + 1
  const getRightChildIndex = (index) => (index << 1) + 2
  const shiftDown = (index) => {
    const leftIndex = getLeftChildIndex(index)
    const rightIndex = getRightChildIndex(index)
    if (isValidIndex(leftIndex) && nums[index] < nums[leftIndex]) {
      swap(nums, index, leftIndex)
      shiftDown(leftIndex)
    }
    if (isValidIndex(rightIndex) && nums[index] < nums[rightIndex]) {
      swap(nums, index, rightIndex)
      shiftDown(rightIndex)
    }
  }
  // 建堆
  for (let i = nums.length >> 1; i >= 0; i--) {
    shiftDown(i)
  }
  for (let i = nums.length - 1; i > 0; i--) {
    swap(nums, i, 0)
    len--
    shiftDown(0)
  }
  return nums
}
export default HeapSort
