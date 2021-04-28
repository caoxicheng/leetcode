function countPrimes(n: number): number {
  if (n < 3) {
    return 0;
  }
  let count: number = 1;
  for (let i = 3; i < n; i++) {
    if (isPrimeNumber(i) === true) {
      count++;
    }
  }
  return count;
};

function isPrimeNumber(n: number): boolean {
  if (n < 3) {
    return false;
  }
  if ((n % 2) === 0) {
    return false;
  }
  for (let i = 3; i * i <= n; i += 2) {
    if ((n % i) === 0) {
      return false;
    }
  }
  return true;
}