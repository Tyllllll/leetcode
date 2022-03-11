import fun from '../src/0000'

test('用例1', () => {
  const nums = [-1, 3, -5, 2, -1, 3, 2]
  const myAns = fun(nums)
  const ans = 9
  expect(myAns).toBe(ans)
})

test('用例1', () => {
  const nums = [-1, 3, 5, 2, -1, 3, 2]
  const myAns = fun(nums)
  const ans = 15
  expect(myAns).toBe(ans)
})

// test('用例3', () => {
//   const n = 4
//   const dir = [0, 1, 2, 2]
//   const pos = [3, 2, 2, 1]
//   const myAns = fun(n, dir, pos)
//   const ans = [48, 24, 12, 12]
//   expect(myAns).toEqual(ans)
// })
