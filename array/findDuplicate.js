function findDuplicate(nums) {
  const seen = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      return nums[i];
    } else {
      seen.add(nums[i]);
    }
  }
  return -1;
}

const nums = [3, 1, 3, 4, 2];
const res = findDuplicate(nums);
console.log(res);
