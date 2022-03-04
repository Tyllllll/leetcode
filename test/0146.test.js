import LRUCache from '../src/0146'

test('用例1', () => {
  const commond = ['LRUCache', 'put', 'put', 'get', 'put', 'get', 'put', 'get', 'get', 'get']
  const data = [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
  const ans = [null, null, null, 1, null, -1, null, -1, 3, 4]
  const myAns = testFn(commond, data, LRUCache)
  expect(myAns).toEqual(ans)
})

test('用例2', () => {
  const commond = ['LRUCache', 'put', 'get']
  const data = [[1], [2, 1], [2]]
  const ans = [null, null, 1]
  const myAns = testFn(commond, data, LRUCache)
  expect(myAns).toEqual(ans)
})

test('用例3', () => {
  const commond = ['LRUCache', 'put', 'put', 'get', 'put', 'put', 'get']
  const data = [[2], [2, 1], [2, 2], [2], [1, 1], [4, 1], [2]]
  const ans = [null, null, null, 2, null, null, -1]
  const myAns = testFn(commond, data, LRUCache)
  expect(myAns).toEqual(ans)
})

const testFn = (commond, data, fn) => {
  const myAns = []
  let obj
  for (let i = 0; i < commond.length; i++) {
    let res = null
    switch (commond[i]) {
      case 'LRUCache':
        obj = new fn(...data[i])
        break
      case 'put':
        obj.put(...data[i])
        break
      case 'get':
        res = obj.get(...data[i])
        break
    }
    myAns.push(res)
  }
  return myAns
}
