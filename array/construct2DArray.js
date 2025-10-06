const construct2DArray = (arr, m, n) => {
  if (arr.length !== m * n) return [];
  const array = [];

  for (let i = 0; i < m; i++) {
    const tempArr = sliceMethod(arr, i * n, i * n + n);
    array.push(tempArr);
  }

  return array;
};

const sliceMethod = (arr, start, end) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(parseInt(arr[i]));
  }

  return result;
};

const m = 1,
  n = 1;
const original = [3];
const array2D = construct2DArray(original, m, n);
console.log(array2D);
