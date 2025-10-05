const findMissing = (nums) => {
  let n = nums.length;
  let xor1 = 0; // XOR of 0..n
  let xor2 = 0; // XOR of array elements

  for (let i = 0; i <= n; i++) xor1 ^= i;
  for (let num of nums) xor2 ^= num;

  return xor1 ^ xor2;
};

const nums = [1];
const res = findMissing(nums);

console.log(res);
