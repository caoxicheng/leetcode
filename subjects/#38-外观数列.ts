function countAndSay(n: number): string {
  if (n === 1) {
    return '1';
  }
  let N: string = countAndSay(n - 1);
  let result: string = "";
  let temp = N[0];
  let time = 1;
  for (let i = 1; i < N.length; i++) {
    if (N[i] === temp) {
      time++
    } else {
      result += time;
      result += temp;
      temp = N[i];
      time = 1;
    }
  }
  result += time;
  result += temp;
  return result;
};