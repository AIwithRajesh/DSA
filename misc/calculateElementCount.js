function calculateElementCount(arr) {
  const hashMap = {};

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (hashMap[element]) {
      hashMap[element] += 1;
    } else {
      hashMap[element] = 1;
    }
  }

  return hashMap;
}

const arr = [2, 3, 2, 4, 3, 5];
const res = calculateElementCount(arr);

console.log(res);
