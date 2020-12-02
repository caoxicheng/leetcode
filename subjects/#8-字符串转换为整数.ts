function myAtoi(s: string): number {
  let result = parseInt(s);
  if  (result !== result) return 0
  if (result > (Math.pow(2,31) - 1)) {
      return (Math.pow(2,31) - 1);
  }
  if (result < -Math.pow(2,31)) {
      return -Math.pow(2,31)
  }
  return result
};