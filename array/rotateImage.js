var rotate = function (matrix) {
  let index = matrix.length;

  for (let i = 0; i < index; i++) {
    let row = matrix[i];

    for (let j = i; j < index; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      // SWAP HERE EXAMPLE (0,0) (0,0) initial not change
      // NEXT (0, 1) (1,0) SO MATRIX[0][1] = 2 AND MATRIX[1][0] = 4 SWAP THEM
      // NOW MATRIX LOOK LIKE [[1,4,3],[2,5,6],[7,8,9]]
      // NEXT (0, 2) (2,0) SO MATRIX[0][2] = 3 AND MATRIX[2][0] = 7 SWAP THEM
      // MATRIX[0][2] = MATRIX[2][0]
      // MATRIX[2][0] = MATRIX[0][2]
      // NOW MATRIX LOOK LIKE [[1,4,7],[2,5,6],[3,8,9]]
      matrix[j][i] = temp;
    }
  }

  for (let r = 0; r < index; r++) {
    matrix[r].reverse();
  }
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const res = rotate(matrix);

console.log(res);
