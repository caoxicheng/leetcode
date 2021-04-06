function removeDuplicates(nums: number[]): number {
  let n = nums.length;
  if (nums.length < 3) {
    return n;
  }
  let slow = 2, fast = 2;
  while (fast < n) {
    if (nums[slow - 2] !== nums[fast]) {
      nums[slow++] = nums[fast];
    }
    fast++;
  }
  return slow;
};