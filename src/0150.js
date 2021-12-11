/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = []
  tokens.forEach((val) => {
    let temp
    switch (val) {
      case '+':
        stack.push(stack.pop() + stack.pop())
        break
      case '-':
        temp = stack.pop()
        stack.push(stack.pop() - temp)
        break
      case '*':
        stack.push(stack.pop() * stack.pop())
        break
      case '/':
        temp = stack.pop()
        stack.push(parseInt(stack.pop() / temp))
        break
      default:
        stack.push(Number(val))
        break
    }
  })
  return stack[0]
}
