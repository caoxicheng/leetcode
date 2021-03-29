function majorityElement(nums: number[]): number {
  let len = nums.length;
  if (len === 1) {
    return nums[0];
  }
  let majorityNumber: number = Math.floor(len / 2);
  const stack = Object.create(null);
  for (let i = 0; i < len; ++i) {
    if (stack[nums[i]] !== void 0) {
      if (++stack[nums[i]] > majorityNumber) {
        return nums[i];
      }
    } else {
      stack[nums[i]] = 1;
    }
  }
};