function addBinary(a: string, b: string): string {
  let ans: string = "";
  let ca: number = 0;
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >=0; i--, j--) {
    let sum = ca;
    sum += i >= 0 ? parseInt(a[i]) : 0;
    sum += j >= 0 ? parseInt(b[j]) : 0;;
    ca = Math.floor(sum/2);
    ans += sum%2;
  }

  ans += ca === 1 ? ca : '';
  return ans.split('').reverse().join('');
};