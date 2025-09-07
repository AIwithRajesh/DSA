const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
};

const arr = [1, 2, 0, 11, 3, 5, 7, 8, 9];
const target = 8;

const res = linearSearch(arr, target);
console.log(res);
// SPACE COMPLEXITY O(1)
// TIME COMPLEXITY O(n)
