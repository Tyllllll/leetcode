import fun from '../src/0994'
test('用例1', () => {
  const grid = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]
  const myAns = fun(grid)
  const ans = 4
  expect(myAns).toBe(ans)
})

test('用例1', () => {
  const grid = [
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ]
  const myAns = fun(grid)
  const ans = -1
  expect(myAns).toBe(ans)
})

test('用例1', () => {
  const grid = [[0, 2]]
  const myAns = fun(grid)
  const ans = 0
  expect(myAns).toBe(ans)
})
