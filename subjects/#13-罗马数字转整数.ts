function romanToInt(s: string): number {
  let num: number = 0;
  const ROMA_MAP = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  } as any;
  for (let i = 0; i < s.length; i++) {
    let cur = ROMA_MAP[s[i]];
    let next = ROMA_MAP[s[i + 1]] || 0;
    cur < next ? (num -= cur) : (num += cur);
  }
  return num;
}
