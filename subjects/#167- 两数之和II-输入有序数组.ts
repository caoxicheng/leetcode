function twoSum(numbers: number[], target: number): number[] {
  let pointerLeft: number = 0, pointerRight: number = numbers.length - 1;
  let result: number;

  while (pointerLeft < pointerRight) {
    result = numbers[pointerLeft] + numbers[pointerRight];
    if (result > target) {
      pointerRight--;
    } else if (result < target) {
      pointerLeft++;
    } else {
      return [pointerLeft + 1, pointerRight + 1];
    }
  }
};