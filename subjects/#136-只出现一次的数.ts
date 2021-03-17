function singleNumber(nums: number[]): number {
  const stack = Object.create(null);
  let currentNum: number; 
  for (let i = 0, l = nums.length; i < l; i++) {
    currentNum = nums[i];
    if (stack[currentNum] === void 0) {
      stack[currentNum] = 1;
    } else {
      delete stack[currentNum];
    }
  }
  for (const key in stack) {
    if (Object.prototype.hasOwnProperty.call(stack, key)) {
      currentNum = parseInt(key);
    }
  }
  return currentNum;
};