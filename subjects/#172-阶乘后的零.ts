function trailingZeroes(n: number): number {
  let sum = 0, n5 = 5;
  while ((n / n5) >= 1) {
    sum += Math.floor(n / n5);
    n5 *= 5;
  }
  return sum;
};
