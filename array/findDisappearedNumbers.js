const findDisappearedNumbers = (nums) => {
  const hashMap = {};
  const n = nums.length;

  for (let num of nums) {
    hashMap[num] = true;
  }

  console.log(hashMap);

  const disappearedValues = [];

  for (let i = 1; i < n; i++) {
    if (!hashMap[i]) {
      disappearedValues.push(i);
    }
  }

  return disappearedValues;
};

const nums = [4, 3, 2, 5, 6, 7, 90, 2, 3, 1];
const res = findDisappearedNumbers(nums);
console.log(res);
