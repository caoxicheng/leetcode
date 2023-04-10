function runningSum(nums: number[]): number[] {
    let length: number = nums.length, sum: number = 0;
    const result: number[] = [];
    for (let n = 0; n < length; n++) {
        sum += nums[n];
        result.push(sum);
    }
    return result;
};
