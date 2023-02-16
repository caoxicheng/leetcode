// 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
//
// 返回这三个数的和。
//
// 假定每组输入只存在恰好一个解。
//
// 示例1
// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
//
// 示例2
// 输入：nums = [0,0,0], target = 1
// 输出：0

function threeSumClosest(nums: number[], target: number): number {
    nums = nums.sort((a, b) => a - b);
    let n = nums.length;
    let best = nums[0] + nums[1] + nums[2];
    for(let i = 0; i < n; ++i) {
        // 保证和上一次枚举的元素不相等
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        // 使用双指针枚举 B 和 C
        let j = i + 1, k = n -1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            // 如果答案为target 直接返回
            if (sum === target) {
                return target;
            }

            // 根据差值的绝对值来更新答案
            if (Math.abs(sum - target) < Math.abs(best - target)) {
                best = sum;
            }

            if (sum > target) {
                let k0 = k - 1;
                // 移动到下一个不相等的元素
                while (j < k0 && nums[k0] === nums[k]) {
                    --k0;
                }
                k = k0;
            } else {
                let j0 = j + 1;
                // 移动到下一个不相等的元素
                while (j0 < k && nums[j0] === nums[j]) {
                    ++j0;
                }
                j = j0;
            }
        }
    }
    return best;

}
