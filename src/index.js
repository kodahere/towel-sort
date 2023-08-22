
// You should implement your task here.

module.exports = function towelSort (matrix) {
  for (let i = 1; i < matrix.length; i += 2) {
    matrix[i].reverse();
  } if (matrix === []) {
    return []
  } else {
  return [].concat(...matrix);
  }
}
