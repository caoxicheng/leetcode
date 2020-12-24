function lengthOfLastWord(s: string): number {
  let i = s.length - 1, sum = 0;
  while(s[i] === ' ') {
    i--;
  }
  while(i >= 0) {
    if (s[i] === ' '){
      return sum;
    } else {
      sum++;
      i--;
    }
  }
  return sum;
}
