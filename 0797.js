/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const res = []
  const dfs = (arr) => {
    const curNode = graph[arr[arr.length - 1]]
    if (arr[arr.length - 1] === graph.length - 1) {
      res.push(arr)
      return
    }
    if (curNode.length === 0) {
      return
    }
    for (let i = 0; i < curNode.length; i++) {
      dfs([...arr, curNode[i]])
    }
  }
  dfs([0])
  return res
}
console.log(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [], [4], []]))
