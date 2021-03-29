function majorityElement(nums: number[]): number {
  let count: number = 0;
  let candidate: number = undefined;

  for (let i = 0, len = nums.length; i < len; ++i) {
    if (count === 0) {
      candidate = nums[i];
    }

    count += (nums[i] === candidate) ? 1 : -1;
  }
  return candidate;
};