const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const half = Math.floor(arr.length / 2);

  var leftarr = arr.slice(0, half);
  var rightArr = arr.slice(half, arr.length);

  var leftarr = mergeSort(leftarr) || [];
  var rightArr = mergeSort(rightArr) || [];

  let sortedArr = [];
  var i = 0;
  var j = 0;

  console.log(leftarr.length);

  while (i < leftarr.length && j < rightArr.length) {
    if (leftarr[i] < rightArr[j]) {
      sortedArr.push(leftarr[i]);
      i++;
    } else {
      sortedArr.push(rightArr[j]);
      j++;
    }
  }

  while (i < leftarr.length) {
    sortedArr.push(leftarr[i]);
    i++;
  }

  while (j < rightArr.length) {
    sortedArr.push(rightArr[j]);
    j++;
  }

  return sortedArr;
};

const arr = [1, 2, 8, 3, 7, 89, 8, 5, 3, 87, 676, 0, 3];
const res = mergeSort(arr);
console.log(res);
