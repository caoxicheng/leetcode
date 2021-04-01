function trailingZeroes(n: number): number {
  let sum = 0;
  while ( n >= 5) {
    sum += n/5 | 0;
    // 按位或，等同于 向下取整，因为会转换成整数，去掉小数部分
    n /= 5;
  }
  return sum;
};
