const setZeros = (matrix) => {
  // if zero find in a array set all values 0 in that array
  // take index of zero and then update all arrays index value to zero
  let zeroIndex = 0;

  for (let i = 0; i < matrix.length; i++) {
    const currentArr = matrix[i];
    for (let j = 0; j < currentArr.length; j++) {
      if (currentArr[j] === 0) {
        zeroIndex = j;
        matrix[i].fill(0);
        break;
      }
    }
  }
  console.log(matrix);
};

const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
const res = setZeros(matrix);
