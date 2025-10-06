var singleNumber = function (nums) {
  const hashMap = {};
  let temp = 0;

  for (let i = 0; i < nums.length; i++) {
    temp ^= nums[i];

    if (hashMap[nums[i]]) {
      hashMap[nums[i]] += 1;
    } else {
      hashMap[nums[i]] = 1;
    }
  }

  console.log("temp", temp);
  for (let num in hashMap) {
    if (hashMap[num] == 1) {
      return parseInt(num);
    }
  }
};

const nums = [4, 1, 2, 1, 2];
const res = singleNumber(nums);
console.log(res);
