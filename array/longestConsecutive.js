var longestConsecutive = function (nums) {
  const n = nums.length;
  const obj = {};
  for (let i = 0; i < n; i++) {
    let diff = nums[i] - nums[i + 1];
    if (diff === 1) {
      obj[i] = nums[i];
    } else if (diff > 1) {
      obj[i] = nums[i + 1];
    } else {
      nums[i] = nums[i + 1];
      nums[i + 1] = nums[i];
    }
  }
  console.log(obj);
  return Object.keys(obj).length;
};

const numbers = [5, 4, 200, 1, 3, 2];
const res = longestConsecutive(numbers);
