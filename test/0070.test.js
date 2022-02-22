import fun from '../src/0070'
test('用例1', () => {
  const n = 2
  const myAns = fun(n)
  const ans = 2
  expect(myAns).toBe(ans)
})

test('用例2', () => {
  const n = 3
  const myAns = fun(n)
  const ans = 3
  expect(myAns).toBe(ans)
})
