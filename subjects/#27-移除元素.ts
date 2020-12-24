function removeElement(nums: number[], val: number): number {
    let p = 0, q = 0;

    while(q < nums.length) {
      if (nums[q] !== val) {
        nums[p++] = nums[q]
      }
      q++;
    }
    return p;
};