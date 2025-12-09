const spiralSeries = (matrix) => {
  const m = matrix.length;
  const n = matrix[0].length;

  let visited = Array.from({ length: m }, () => Array(n).fill(false));

  // Arrays to represent the changes in row and column
  // indices: turn right(0, +1), turn down(+1, 0), turn
  // left(0, -1), turn up(-1, 0)
  const dr = [0, 1, 0, -1];
  const dc = [1, 0, -1, 0];

  // Initial position in the matrix
  let r = 0,
    c = 0,
    idx = 0;

  // Initial direction index
  // let idx = 0;
  const res = [];

  for (let i = 0; i < m * n; ++i) {
    res.push(matrix[r][c]);
    visited[r][c] = true;

    let newR = r + dr[idx];
    let newC = c + dc[idx];

    if (
      newR >= 0 &&
      newR < m &&
      newC >= 0 &&
      newC < n &&
      !visited[newR][newC]
    ) {
      r = newR;
      c = newC;
    } else {
      idx = (idx + 1) % 4;
      r += dr[idx];
      c += dc[idx];
    }
  }

  return res;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const res = spiralSeries(matrix);
console.log("res", res);
