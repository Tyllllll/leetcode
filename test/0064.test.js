import fun from '../src/0064'
test('用例1', () => {
  const grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ]
  const myAns = fun(grid)
  const ans = 7
  expect(myAns).toBe(ans)
})

test('用例2', () => {
  const grid = [
    [1, 2, 3],
    [4, 5, 6],
  ]
  const myAns = fun(grid)
  const ans = 12
  expect(myAns).toBe(ans)
})
