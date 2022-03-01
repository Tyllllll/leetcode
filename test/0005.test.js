import fun from '../src/0005'
test('用例1', () => {
  const s = 'babad'
  const myAns = fun(s)
  const ans = 'bab'
  expect(myAns).toBe(ans)
})

test('用例2', () => {
  const s = 'cbbd'
  const myAns = fun(s)
  const ans = 'bb'
  expect(myAns).toBe(ans)
})

test('用例3', () => {
  const s = 'aaaa'
  const myAns = fun(s)
  const ans = 'aaaa'
  expect(myAns).toBe(ans)
})
