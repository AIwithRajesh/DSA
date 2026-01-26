var rotate = function (matrix) {
  const emptyMatrix = matrix.map((mat) => mat.map((m) => 0));
  let index = matrix.length - 1;

  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      emptyMatrix[j][index] = row[j];
      index--;
      break;
    }
  }

  console.log(emptyMatrix);
};

const matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

const res = rotate(matrix);
