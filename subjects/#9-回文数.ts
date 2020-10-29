/**
 * 反转
 * @param x > 0
 */
function reverse(x: number): number {
  let y: number = 0;
  while (x) {
    let k = x % 10;
    y = y * 10 + k;
    x = (x - k) / 10;
  }

  return y;
};

function palindromic(x: number): boolean {
  if (x < 0) {
    return false;
  }
  return x === reverse(x); 
}

// 上面借用反转


function isPalindromic(x: number): boolean {
  return x.toString() === [...x.toString()].reverse().join('');
}