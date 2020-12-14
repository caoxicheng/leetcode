function searchInsert(nums: number[], target: number): number {
  let left:number = 0;
  let right: number = nums.length - 1;

  while(left <= right) {
    let mid = ((right - left) >> 1) + left;
    if (target <= nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return right + 1;
};