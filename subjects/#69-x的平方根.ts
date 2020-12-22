function mySqrt(x: number): number {
  let L:number = 1, R: number = x, answer: number = 0;
  while (L <= R) {
    let mid: number = L + Math.floor((R - L)/2);
    if (Math.pow(mid, 2) <= x) {
      answer = mid;
      L = mid + 1;
    } else {
      R = mid - 1;
    }
  }
  return answer;
};