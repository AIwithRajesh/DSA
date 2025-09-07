const bubbleSort = (arr) => {
  arr = [...arr];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};

const arr = [4, 2, 5, 1, 6, 9, 5];
const res = bubbleSort(arr);
console.log(res);
