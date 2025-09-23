function findKthLargest(nums, k) {
  // SORT ARRAY IN DESCENDING ORDER
  const sortedArr = nums.sort((a, b) => b - a);

  return sortedArr[k - 1];
}

const nums = [3, 2, 1, 5, 6, 4];
const k = 2;

const res = findKthLargest(nums, k);

console.log("res", res);
