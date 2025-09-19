var twoSum = function (nums, target) {
  let numMap = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numMap.hasOwnProperty(complement)) {
      return [numMap[complement], i];
      //   return nums[numMap[complement]] + nums[i];
    } else {
      numMap[nums[i]] = i;
    }
  }

  return numMap;
};

let nums = [2, 7, 11, 15];
let target = 17;

const res = twoSum(nums, target);
console.log(res);
