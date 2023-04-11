function pivotIndex(nums: number[]): number {
    let leftSum: number = 0, rightSum: number = 0;
    for (let i = 0; i < nums.length; i++) {
        leftSum = rightSum = 0;
        for( let j = 0; j < nums.length; j++) {
            if (j < i) {
                leftSum += nums[j];
            } else if (j > i) {
                rightSum += nums[j];
            }
        }
        if (leftSum === rightSum) {
            return i;
        }
    }
    return -1;
}
