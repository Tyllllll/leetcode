import fun from '../src/LCP07'
test('用例1', () => {
  const n = 5
  const relation = [
    [0, 2],
    [2, 1],
    [3, 4],
    [2, 3],
    [1, 4],
    [2, 0],
    [0, 4],
  ]
  const k = 3
  const myAns = fun(n, relation, k)
  const ans = 3
  expect(myAns).toBe(ans)
})

test('用例1', () => {
  const n = 3
  const relation = [
    [0, 2],
    [2, 1],
  ]
  const k = 2
  const myAns = fun(n, relation, k)
  const ans = 0
  expect(myAns).toBe(ans)
})
