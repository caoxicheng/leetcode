function removeDuplicates(nums: number[]): number {
  if (nums.length <= 1) {
    return nums.length;
  }

  let i:number = 0, j:number =1;
  while(j < nums.length) {
    if (nums[i] === nums[j]) {
      j++;
    } else {
      nums.splice(i, j - i - 1)
      i++;
      j = i+1;
    }
  }
  if (i !== j) {
    nums.splice(i, j - i - 1)
  }

  return nums.length;
};