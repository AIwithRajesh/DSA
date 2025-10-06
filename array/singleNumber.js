var singleNumber = function (nums) {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (hashMap.hasOwnProperty(nums[i])) {
      hashMap[nums[i]] += 1;
    } else {
      hashMap[nums[i]] = 1;
    }
  }

  for (let num in hashMap) {
    if (hashMap[num] == 1) {
      return parseInt(num);
    }
  }
};

const nums = [4, 1, 2, 1, 2];
const res = singleNumber(nums);
console.log(res);
