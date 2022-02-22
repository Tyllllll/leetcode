import BubbleSort from '../src/BubbleSort'
import SelectSort from '../src/SelectSort'
import InsertSort from '../src/InsertSort'
import ShellSort from '../src/ShellSort'
import QuickSort from '../src/QuickSort'
import MergeSort from '../src/MergeSort'
import HeapSort from '../src/HeapSort'
import CountSort from '../src/CountSort'
import BucketSort from '../src/BucketSort'
import RaixSort from '../src/RaixSort'

const nums = [3, 44, 38, 5, 47, 15, 19, 36, 26, 27, 2, 46, 4, 19, 50, 48]
const ans = [2, 3, 4, 5, 15, 19, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
test('冒泡排序', () => {
  const myAns = BubbleSort(nums)
  expect(myAns).toEqual(ans)
})

test('选择排序', () => {
  const myAns = SelectSort(nums)
  expect(myAns).toEqual(ans)
})

test('插入排序', () => {
  const myAns = InsertSort(nums)
  expect(myAns).toEqual(ans)
})

test('希尔排序', () => {
  const myAns = ShellSort(nums)
  expect(myAns).toEqual(ans)
})

test('快速排序', () => {
  const myAns = QuickSort(nums)
  expect(myAns).toEqual(ans)
})

test('归并排序', () => {
  const myAns = MergeSort(nums)
  expect(myAns).toEqual(ans)
})

test('堆排序', () => {
  const myAns = HeapSort(nums)
  expect(myAns).toEqual(ans)
})

test('计数排序', () => {
  const myAns = CountSort(nums)
  expect(myAns).toEqual(ans)
})

test('桶排序', () => {
  const myAns = BucketSort(nums)
  expect(myAns).toEqual(ans)
})

test('基数排序', () => {
  const myAns = RaixSort(nums)
  expect(myAns).toEqual(ans)
})
