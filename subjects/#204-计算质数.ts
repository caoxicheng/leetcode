function countPrimes(n: number): number {
  if (n < 3) {
    return 0;
  }
  let map: boolean[] = new Array(n).fill(true);
  let i = 2,
    count = 0;
  while (i < n) {
    if (map[i] === true) {
      count++;
      for (let temp = i + i; temp < n; temp += i) {
        if (map[temp] === true) {
          map[temp] = false;
        }
      }
    }
    i++;
  }
  return count;
}
