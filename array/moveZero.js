var moveZeroes = function (nums) {
  const tempArr = [];
  const zeroArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      tempArr.push(nums[i]);
    } else {
      zeroArr.push(nums[i]);
    }
  }

  const newArr = [...tempArr, ...zeroArr];
  for (let i = 0; i < nums.length; i++) {
    nums[i] = newArr[i];
  }
};

const nums = [0, 1, 0, 9, 0, 7, 3, 12];
moveZeroes(nums);
console.log(nums);
