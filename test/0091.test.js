import fun from '../src/0091'

test('用例1', () => {
  const s = '12'
  const myAns = fun(s)
  const ans = 2
  expect(myAns).toBe(ans)
})

test('用例2', () => {
  const s = '226'
  const myAns = fun(s)
  const ans = 3
  expect(myAns).toBe(ans)
})

test('用例3', () => {
  const s = '0'
  const myAns = fun(s)
  const ans = 0
  expect(myAns).toBe(ans)
})
