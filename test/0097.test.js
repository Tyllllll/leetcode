import fun from '../src/0097'

test('用例1', () => {
  const s1 = 'aabcc'
  const s2 = 'dbbca'
  const s3 = 'aadbbcbcac'
  const myAns = fun(s1, s2, s3)
  const ans = true
  expect(myAns).toBe(ans)
})

test('用例2', () => {
  const s1 = 'aabcc'
  const s2 = 'dbbca'
  const s3 = 'aadbbbaccc'
  const myAns = fun(s1, s2, s3)
  const ans = false
  expect(myAns).toBe(ans)
})

test('用例2', () => {
  const s1 = ''
  const s2 = ''
  const s3 = ''
  const myAns = fun(s1, s2, s3)
  const ans = true
  expect(myAns).toBe(ans)
})
