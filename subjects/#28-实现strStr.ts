function strStr(haystack: string, needle: string): number {
  let L: number = needle.length;
  let n: number = haystack.length;

  if (L === 0) {
    return 0;
  }

  let pn: number = 0;

  while(pn + L < n + 1) {
    while(pn + L < n + 1 && needle[0] !== haystack[pn]) pn++;

    let currLen = 0, pl = 0;
    while (pl < L && pn < n && needle[pl] === haystack[pn]) {
      currLen++;
      pl++;
      pn++;
    }

    if (currLen === L) {
      return pn - L;
    }

    pn = pn - currLen + 1;
  }

  return -1;
};