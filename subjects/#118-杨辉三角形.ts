function generate(numRows: number): number[][] {
  const resultArray = [];
  // 先把边赋值
  for (let index = 0; index < numRows; index++) {
    let temp = [];
    for (let l = 0; l <= index; l++) {
      temp.push(getNumber(index, l));
    }
    resultArray.push(temp);
  }
  return resultArray;
}

const map = {};

/**
 * 确认杨辉三角形的具体格子所具有的数字值
 * @param numRows 行
 * @param numCols 列
 */
function getNumber(numRows: number, numCols: number): number {
  let key = numRows.toString() + numCols.toString();
  if (map[key] !== void 0) {
    return map[key];
  } else {
    if (numCols === 0) {
      map[key] = 1;
      return 1;
    }
    if (numRows === numCols) {
      map[key] = 1;
      return 1;
    }
    map[key] = getNumber(numRows - 1, numCols - 1) + getNumber(numRows - 1, numCols);
    return map[key];
  }
}
