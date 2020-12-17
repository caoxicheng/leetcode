function maxSubArray(nums: number[]): number {
  let pre: number = 0, maxAns: number = nums[0];

  nums.forEach(x => {
    pre = Math.max(pre + x, x);
    maxAns = Math.max(pre, maxAns);
  })

  return maxAns;
};