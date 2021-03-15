function spiralOrder(matrix: number[][]): number[] {
  let maxWidth: number = matrix[0].length - 1;
  let minWidth: number = 0;
  let minHeight: number = 0;
  let maxHeight: number = matrix.length - 1;

  const arrowList = ["right", "down", "left", "up"];
  let arrow: 0 | 1 | 2 | 3 = maxWidth >= 1 ? 0 : 1;
  let x: number = 0,
    y: number = 0;

  let result: Array<number> = [matrix[0][0]];

  while (minWidth <= maxWidth && minHeight <= maxHeight) {
    switch (arrowList[arrow]) {
      case "right":
        y++;
        if (y === maxWidth) {
          arrow = ((arrow + 1) % 4) as 0 | 1 | 2 | 3;
          minHeight++;
        }
        if (y > maxWidth) {
          return result;
        }
        break;
      case "down":
        x++;
        if (x === maxHeight) {
          arrow = ((arrow + 1) % 4) as 0 | 1 | 2 | 3;
          maxWidth--;
        }
        if (x > maxHeight) {
          return result;
        }
        break;
      case "left":
        y--;
        if (y === minWidth) {
          arrow = ((arrow + 1) % 4) as 0 | 1 | 2 | 3;
          maxHeight--;
        }
        if (y < minWidth) {
          return result;
        }
        break;
      case "up":
        x--;
        if (x === minHeight) {
          arrow = ((arrow + 1) % 4) as 0 | 1 | 2 | 3;
          minWidth++;
        }
        if (x < minHeight) {
          return result;
        }
        break;
      default:
    }
    result.push(matrix[x][y]);
  }

  return result;
}
