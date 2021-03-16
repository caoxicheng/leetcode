function generateMatrix(n: number): number[][] {
  let x: number = 0, y: number = 0;
  let arrowList: Array<string> = ['right', 'down', 'left', 'up'], arrow: number = 0;
  let maxLength: number = Math.pow(n, 2), currentNum: number = 1;
  let minWidth: number = 0, maxWidth: number = n - 1, minHeight: number = 0, maxHeight: number = n - 1;
  let result = new Array(n).fill(0).map(() => new Array(n).fill(0));

  while (currentNum <= maxLength) {
    result[x][y] = currentNum++;
    switch (arrowList[arrow]) {
      case 'right':
        y++;
        if (y ===  maxWidth) {
          arrow = (arrow + 1) % 4;
          minHeight++;
        }
        break;
      case 'down':
        x++;
        if (x === maxHeight) {
          arrow = (arrow + 1) % 4;
          maxWidth--;
        }
        break;
      case 'left':
        y--;
        if (y === minWidth) {
          arrow = (arrow + 1) % 4;
          minWidth++;
        }
        break;
      case 'up':
        x--;
        if (x === minHeight) {
          arrow = (arrow + 1) % 4;
          maxHeight--;
        }
        break;
      default:
    }
  }
  return result;
};