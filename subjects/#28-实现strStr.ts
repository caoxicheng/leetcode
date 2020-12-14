function strStr(haystack: string, needle: string): number {
  let L: number = needle.length;
  let n: number = haystack.length;

  for(let start = 0; start < n - L + 1; start++) {
    if (haystack.slice(start, start + L) === needle) {
      return start;
    }
  }

  return -1;
};