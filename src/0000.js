/**
 *
 * @param {*} n
 * @param {*} dir
 * @param {*} pos
 */
const fun = (n, dir, pos) => {
  const initBlock = new Block(n)
  const queue = new MaxHeap()
  queue.push(initBlock)
  const res = []
  for (let i = 0; i < dir.length; i++) {
    switch (dir[i]) {
      case 0:
        queue.forEach((block, index) => {
          if (block.isSliced({ x: pos[i] })) {
            block.setPriority(true)
            queue.shiftUp(index)
          } else {
            block.setPriority(false)
          }
        })
        break
      case 1:
        queue.forEach((block, index) => {
          if (block.isSliced({ y: pos[i] })) {
            block.setPriority(true)
            queue.shiftUp(index)
          } else {
            block.setPriority(false)
          }
        })
        break
      case 2:
        queue.forEach((block, index) => {
          if (block.isSliced({ z: pos[i] })) {
            block.setPriority(true)
            queue.shiftUp(index)
          } else {
            block.setPriority(false)
          }
        })
        break
    }
    while (queue.arr[0].priority) {
      const block = queue.shift()
      const newBlock1 = block.clone()
      const newBlock2 = block.clone()
      switch (dir[i]) {
        case 0:
          newBlock1.setEndX(pos[i])
          newBlock2.setStartX(pos[i])
          break
        case 1:
          newBlock1.setEndY(pos[i])
          newBlock2.setStartY(pos[i])
          break
        case 2:
          newBlock1.setEndZ(pos[i])
          newBlock2.setStartZ(pos[i])
          break
      }
      queue.push(newBlock1)
      queue.push(newBlock2)
    }
    res.push(queue.arr[0].getV())
  }
  return res
}
class Block {
  priority = false
  constructor(length) {
    this.startX = this.startY = this.startZ = 0
    this.endX = this.endY = this.endZ = length
  }
  setStartX(x) {
    this.startX = x
    return this
  }
  setStartY(y) {
    this.startY = y
    return this
  }
  setStartZ(z) {
    this.startZ = z
    return this
  }
  setEndX(x) {
    this.endX = x
    return this
  }
  setEndY(y) {
    this.endY = y
    return this
  }
  setEndZ(z) {
    this.endZ = z
    return this
  }
  setPriority(priority) {
    this.priority = priority
    return this
  }
  /**
   * 传入切刀的位置，返回是否被切
   */
  isSliced({ x, y, z }) {
    if (x) {
      return this.startX < x && this.endX > x
    }
    if (y) {
      return this.startY < y && this.endY > y
    }
    if (z) {
      return this.startZ < z && this.endZ > z
    }
  }
  getV() {
    return (this.endX - this.startX) * (this.endY - this.startY) * (this.endZ - this.startZ)
  }
  clone() {
    const newBlock = new Block()
    newBlock
      .setStartX(this.startX)
      .setStartY(this.startY)
      .setStartZ(this.startZ)
      .setEndX(this.endX)
      .setEndY(this.endY)
      .setEndZ(this.endZ)
    return newBlock
  }
  static compare(block1, block2) {
    if (block1.priority === true && block2.priority === false) {
      return true
    }
    if (block1.priority === false && block2.priority === true) {
      return false
    }
    return block1.getV() > block2.getV()
  }
}
class MaxHeap {
  arr = []
  forEach(...args) {
    this.arr.forEach(...args)
  }
  swap(i, j) {
    const temp = this.arr[i]
    this.arr[i] = this.arr[j]
    this.arr[j] = temp
  }
  isValidIndex(index) {
    return index >= 0 && index < this.arr.length
  }
  getParentIndex(index) {
    return (index - 1) >> 1
  }
  getLeftChildIndex(index) {
    return (index << 1) + 1
  }
  getRightChildIndex(index) {
    return (index << 1) + 2
  }
  shiftUp(index) {
    const parentIndex = this.getParentIndex(index)
    if (this.isValidIndex(parentIndex)) {
      if (Block.compare(this.arr[index], this.arr[parentIndex])) {
        this.swap(index, parentIndex)
        this.shiftUp(parentIndex)
      }
    }
  }
  shiftDown(index) {
    const leftIndex = this.getLeftChildIndex(index)
    const rightIndex = this.getRightChildIndex(index)
    if (this.isValidIndex(leftIndex)) {
      if (Block.compare(this.arr[leftIndex], this.arr[index])) {
        this.swap(index, leftIndex)
        this.shiftDown(leftIndex)
      }
    }
    if (this.isValidIndex(rightIndex)) {
      if (Block.compare(this.arr[rightIndex], this.arr[index])) {
        this.swap(index, rightIndex)
        this.shiftDown(rightIndex)
      }
    }
  }
  push(val) {
    this.arr.push(val)
    this.shiftUp(this.arr.length - 1)
    return this.arr.length
  }
  shift() {
    const res = this.arr[0]
    this.arr[0] = this.arr[this.arr.length - 1]
    this.arr.pop()
    this.shiftDown(0)
    return res
  }
}
export default fun
