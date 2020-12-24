function plusOne(digits: number[]): number[] {
  const len: number = digits.length;

  for (let i = len -1 ; i >= 0; i--) {
    digits[i]++;
    digits[i] = digits[i]%10;
    if (digits[i] !== 0) {
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};
