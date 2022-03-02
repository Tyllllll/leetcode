import fun from '../src/0062'
test('用例1', () => {
  const m = 3
  const n = 7
  const myAns = fun(m, n)
  const ans = 28
  expect(myAns).toBe(ans)
})

test('用例2', () => {
  const m = 3
  const n = 2
  const myAns = fun(m, n)
  const ans = 3
  expect(myAns).toBe(ans)
})
