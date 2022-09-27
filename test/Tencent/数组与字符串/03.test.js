import fun from '../../../src/Tencent/数组与字符串/03'
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
