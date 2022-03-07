import fun from '../src/0000'

test('用例1', () => {
  const n = 2
  const dir = [0, 1, 2]
  const pos = [1, 1, 1]
  const myAns = fun(n, dir, pos)
  const ans = [4, 2, 1]
  expect(myAns).toEqual(ans)
})

test('用例2', () => {
  const n = 4
  const dir = [0, 1, 2]
  const pos = [3, 2, 1]
  const myAns = fun(n, dir, pos)
  const ans = [48, 24, 18]
  expect(myAns).toEqual(ans)
})

test('用例3', () => {
  const n = 4
  const dir = [0, 1, 2, 2]
  const pos = [3, 2, 2, 1]
  const myAns = fun(n, dir, pos)
  const ans = [48, 24, 12, 12]
  expect(myAns).toEqual(ans)
})
