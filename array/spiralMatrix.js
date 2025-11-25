const spiralSeries = (matrix) => {
  spiralNumbers = [];
  const set = [];
  for (let i = 0; i < matrix.length; i++) {
    currentArr = matrix[i];
    const lastIndex = currentArr.length - 1;
    set.push(lastIndex);
  }

  console.log(set);
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const res = spiralSeries(matrix);
