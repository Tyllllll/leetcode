const binaryInsertVal = (arr, val) => {
  if (arr[0] > val) {
    arr.unshift(val)
    return 0
  }
  let end = arr.length
  if (end === 0 || arr[end - 1] < val) {
    arr.push(val)
    return end
  }
  let begin = 0
  let index = Math.floor(end / 2)
  while (true) {
    // TODOS: 二分查找还是有bug
    if (arr[index - 1] <= val && arr[index] > val) {
      break
    }
    if (arr[index] > val) {
      end = index
    } else {
      begin = index
    }
    index = Math.floor((begin + end) / 2)
  }
  arr.splice(index, 0, val)
  return index
}
