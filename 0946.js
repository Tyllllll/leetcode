/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const stack = []
  for (const num of pushed) {
    if (num !== popped[0]) {
      stack.push(num)
    } else {
      popped.shift()
    }
    while (stack.length && stack[stack.length - 1] === popped[0]) {
      stack.pop()
      popped.shift()
    }
  }
  return !stack.length
}
