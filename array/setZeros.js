const setZeros = (matrix) => {
  const colsToZero = new Set();
  let zeroThArray = null;

  for (let i = 0; i < matrix.length; i++) {
    const currentArr = matrix[i];

    for (let j = 0; j < currentArr.length; j++) {
      if (currentArr[j] === 0) {
        colsToZero.add(j);
        zeroThArray = i;
      }
    }

    if (zeroThArray !== null) {
      matrix[zeroThArray].fill(0);
    }
  }

  for (const col of colsToZero) {
    console.log("col", col);
    for (let k = 0; k < matrix.length; k++) {
      matrix[k][col] = 0;
    }
  }

  console.log(colsToZero, zeroThArray);
};

const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

const res = setZeros(matrix);

console.log(matrix);
