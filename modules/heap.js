class Heap {
  constructor() {
    this.container = []
    this.size = 0
  }
  swap(i, j) {
    if (!this.isValidIndex(i) || !this.isValidIndex(j)) {
      throw new Error('index error')
    }
    const temp = this.container[i]
    this.container[i] = this.container[j]
    this.container[j] = temp
  }
  getSize() {
    return this.size
  }
  isValidIndex(index) {
    return index >= 0 && index < this.size
  }
  getParentIndex(index) {
    return (index - 1) >> 1
  }
  getParent(index) {
    const parentIndex = this.getParentIndex(index)
    if (!this.isValidIndex(parentIndex)) {
      return null
    }
    return this.container[parentIndex]
  }
  getLeftChildIndex(index) {
    return (index << 1) + 1
  }
  getLeftChild(index) {
    const leftChildIndex = this.getLeftChildIndex(index)
    if (!this.isValidIndex(leftChildIndex)) {
      return null
    }
    return this.container[leftChildIndex]
  }
  getRightChildIndex(index) {
    return (index << 1) + 2
  }
  getRightChild(index) {
    const rightChildIndex = this.getRightChildIndex(index)
    if (!this.isValidIndex(rightChildIndex)) {
      return null
    }
    return this.container[rightChildIndex]
  }
}
class MinHeap extends Heap {
  constructor(arr) {
    super()
    this.heapify(arr)
  }
  shiftUp(index) {
    const parentIndex = this.getParentIndex(index)
    if (this.isValidIndex(parentIndex) && this.container[index] < this.container[parentIndex]) {
      this.swap(parentIndex, index)
      this.shiftUp(parentIndex)
    }
  }
  shiftDown(index) {
    const leftIndex = this.getLeftChildIndex(index)
    const rightIndex = this.getRightChildIndex(index)
    if (!this.isValidIndex(leftIndex) || !this.isValidIndex(rightIndex)) {
      return
    }
    if (this.container[leftIndex] < this.container[index]) {
      this.swap(leftIndex, index)
      this.shiftDown(leftIndex)
    }
    if (this.container[rightIndex] < this.container[index]) {
      this.swap(rightIndex, index)
      this.shiftDown(rightIndex)
    }
  }
  insert(value) {
    this.container.push(value)
    this.size += 1
    this.shiftUp(this.size - 1)
  }
  pop() {
    const value = this.container[0]
    this.container[0] = this.container.pop()
    this.size -= 1
    this.shiftDown(0)
    return value
  }
  heapify(arr) {
    if (!Array.isArray(arr)) {
      return
    }
    this.container = arr.slice()
    this.size = arr.length
    for (let i = this.size >> 1; i >= 0; i--) {
      this.shiftDown(i)
    }
  }
}
class MaxHeap extends Heap {
  shiftUp(index) {
    const parentIndex = this.getParentIndex(index)
    if (this.isValidIndex(parentIndex) && this.container[index] > this.container[parentIndex]) {
      this.swap(parentIndex, index)
      this.shiftUp(parentIndex)
    }
  }
  shiftDown(index) {
    const leftIndex = this.getLeftChildIndex(index)
    const rightIndex = this.getRightChildIndex(index)
    if (!this.isValidIndex(leftIndex) || !this.getRightChildIndex(rightIndex)) {
      return
    }
    if (this.container[index] < this.container[leftIndex]) {
      this.swap(index, leftIndex)
      this.shiftDown(leftIndex)
    }
    if (this.container[index] < this.container[rightIndex]) {
      this.swap(index, rightIndex)
      this.shiftDown(rightIndex)
    }
  }
  insert(value) {
    this.container.push(value)
    this.size += 1
    this.shiftUp(this.size - 1)
  }
  pop() {
    const value = this.container[0]
    this.container[0] = this.container.pop()
    this.size -= 1
    this.shiftDown(0)
    return value
  }
  heapify(arr) {
    if (Array.isArray(arr)) {
      return
    }
    this.container = arr.slice()
    this.size = arr.length
    for (let i = this.size >> 1; i >= 0; i--) {
      this.shiftDown(i)
    }
  }
}

export { MaxHeap, MinHeap }
