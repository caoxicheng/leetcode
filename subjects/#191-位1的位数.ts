function hammingWeight(n: number): number {
  let result = 0;
  while (n > 0) {
    n % 2  && (++result);
    n >>>= 1;
  }
  return result;
};