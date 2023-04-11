function pivotIndex(nums: number[]): number {
    const total: number = nums.reduce((a,b) => a+b, 0);
    let sum:number = 0;
    for (let i = 0; i < nums.length; i++) {
        if (2 * sum + nums[i] === total) {
            return i;
        }
        sum += nums[i];
    }
    return -1;
}
