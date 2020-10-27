function reverse(x: number): number {
  const range: number = Math.pow(2,31);

  let y: number = 0;
  while (x) {
    let k = x % 10;
    y = y * 10 + k;
    x = (x - k) / 10;
  }

  return (y >= range || y < -range) ? 0 : y;
};