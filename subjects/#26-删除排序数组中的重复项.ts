function removeDuplicates(nums: number[]): number {
  if (nums.length <= 1) {
    return nums.length;
  }

  let p = 0, q = 0;

  while(q <= nums.length) {
    if (nums[p] !== nums [q]) {
      nums[++p] = nums[q];
    }
    q++;
  }
  return p;
 };