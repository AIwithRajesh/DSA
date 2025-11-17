function findAllDuplicates(nums) {
  const seen = new Set();
  const seenValues = [];

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      seenValues.push(nums[i]);
    } else {
      seen.add(nums[i]);
    }
  }

  return seenValues;
}

const nums = [4, 3, 2, 7, 8, 2, 3, 1];
const res = findAllDuplicates(nums);
console.log(res);
