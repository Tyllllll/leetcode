import fun from '../src/0063'
test('用例1', () => {
  const arr = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]
  const myAns = fun(arr)
  const ans = 2
  expect(myAns).toBe(ans)
})

test('用例2', () => {
  const arr = [
    [0, 1],
    [0, 0],
  ]
  const myAns = fun(arr)
  const ans = 1
  expect(myAns).toBe(ans)
})

test('用例3', () => {
  const arr = [[1]]
  const myAns = fun(arr)
  const ans = 0
  expect(myAns).toBe(ans)
})
