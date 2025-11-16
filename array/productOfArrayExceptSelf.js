const productExceptSelf = (nums) => {
  let n = nums.length;
  const leftArr = new Array(n);
  const rightArr = new Array(n);
  const answers = new Array(n);

  leftArr[0] = 1;
  for (let i = 1; i < n; i++) {
    leftArr[i] = leftArr[i - 1] * nums[i - 1];
  }

  rightArr[nums.length - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    rightArr[i] = rightArr[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < n; i++) {
    answers[i] = rightArr[i] * leftArr[i];
  }
  console.log("answers", answers);
  return answers;
};

const nums = [1, 2, 3, 4];
productExceptSelf(nums);
