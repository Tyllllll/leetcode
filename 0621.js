/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 * @description 拉了一个二维矩阵，任务次数多的优先执行。返回值公式为推导的
 */
var leastInterval = function (tasks, n) {
  const m = new Map()
  tasks.forEach((val) => {
    const count = m.get(val)
    if (!count) m.set(val, 1)
    else m.set(val, count + 1)
  })
  const maxExec = Math.max(...m.values())
  let maxCount = 0
  m.forEach((val) => {
    if (val === maxExec) {
      maxCount++
    }
  })
  return Math.max(tasks.length, (maxExec - 1) * (n + 1) + maxCount)
}

console.log(leastInterval(['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], 2))
