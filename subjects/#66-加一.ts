function plusOne(digits: number[]): number[] {
  plusOneInside(digits.length - 1);
  return digits;

  function plusOneInside(index: number): void {
    digits[index] = (digits[index] + 1) % 10;
    if (digits[index] === 0) {
      if (digits[index - 1] !== void 0) {
        plusOneInside(index - 1);
      } else {
        digits.unshift(1);
      }
    }
  }
};

plusOne([9,9])