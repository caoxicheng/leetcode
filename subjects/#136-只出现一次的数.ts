function singleNumber(nums: number[]): number {
  let res: number = 0;
  // ++i 和 i++ 也会有一些细微的性能区别！
  for( let i = 0, l = nums.length; i < l; ++i) {
    res ^= nums[i];
  }
  return res;
};