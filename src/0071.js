/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const pathArray = path.split(/\/+/)
  const pathStack = ['']
  pathArray.forEach((val) => {
    switch (val) {
      case '':
        break
      case '.':
        break
      case '..':
        if (pathStack.length > 1) {
          pathStack.pop()
        }
        break
      default:
        pathStack.push(val)
        break
    }
  })
  return pathStack.length > 1 ? pathStack.join('/') : '/'
}
