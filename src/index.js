
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) return []
  let resultArray = []
  for (let i = 0; i < matrix.length; i ++) {
    if (i % 2 === 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] !== undefined)
        resultArray.push(matrix[i][j])
      }
    } else {
      for (let j = matrix[i].length; j >= 0; j--) {
        if (matrix[i][j] !== undefined)
        resultArray.push(matrix[i][j])
      }
    }
    
  }
  console.log(resultArray)
  return resultArray
}
