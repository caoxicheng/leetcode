function maxArea(height: number[]): number {
  if (height.length === 2) {
    return Math.min(height[0], height[1]);
  }
  let pl: number = 0,
    pr: number = height.length - 1;
  let answer: number = 0;
  while (pl < pr) {
    let numl: number = height[pl],
      numr: number = height[pr];
    let temp = Math.min(numl, numr) * (pr - pl);
    if (temp > answer) {
      answer = temp;
    }
    numl <= numr ? pl++ : pr--;
  }
  return answer;
}
