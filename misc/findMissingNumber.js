const findMissing = (nums) => {
  let XOR1 = 0;
  let XOR2 = 0;

  const min = Math.min(...nums);
  const max = Math.max(...nums);

  for (let i = min; i <= max; i++) {
    console.log("index", i);
    XOR1 ^= i;
  }

  for (let num of nums) {
    console.log("num", num);
    XOR2 ^= num;
  }

  console.log(XOR1, XOR2);

  return XOR1 ^ XOR2;
};

const nums = [10, 12, 13, 14, 15];
const res = findMissing(nums);

console.log(res);
