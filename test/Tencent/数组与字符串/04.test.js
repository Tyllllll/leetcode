import fun from '../../../src/Tencent/数组与字符串/04'
test('用例1', () => {
  const s = '42'
  const myAns = fun(s)
  const ans = 42
  expect(myAns).toBe(ans)
})

test('用例2', () => {
  const s = '   -42'
  const myAns = fun(s)
  const ans = -42
  expect(myAns).toBe(ans)
})

test('用例3', () => {
  const s = '4193 with words'
  const myAns = fun(s)
  const ans = 4193
  expect(myAns).toBe(ans)
})

test('用例4', () => {
  const s = 'words and 987'
  const myAns = fun(s)
  const ans = 0
  expect(myAns).toBe(ans)
})

test('用例4', () => {
  const s = '-91283472332'
  const myAns = fun(s)
  const ans = -2147483648
  expect(myAns).toBe(ans)
})
