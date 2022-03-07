import fun from '../src/0096'

test('用例1', () => {
  const n = 3
  const myAns = fun(n)
  const ans = 5
  expect(myAns).toBe(ans)
})

test('用例2', () => {
  const n = 1
  const myAns = fun(n)
  const ans = 1
  expect(myAns).toBe(ans)
})

test('用例3', () => {
  const n = 4
  const myAns = fun(n)
  const ans = 14
  expect(myAns).toBe(ans)
})
