var rotate = function (matrix) {
  const emptyMatrix = matrix.map((mat) => mat.map((m) => 0));
  let index = matrix.length - 1;

  for (let i = 0; i < matrix.length; i++) {
    // Row of matrix
    let row = matrix[i]; //matrix[0] = [5, 1, 9, 11] so on

    for (let j = 0; j < row.length; j++) {
      emptyMatrix[j][index] = row[j];
    }
    index--;
  }

  return emptyMatrix;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const res = rotate(matrix);

console.log(res);
