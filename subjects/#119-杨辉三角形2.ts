function getRow(rowIndex: number): number[] {
  const resultArray = [];
  for (let index = 0; index <= rowIndex; index++) {
    
    resultArray.push(getNumber(rowIndex, index));
  }
  return resultArray;
}


/**
 * 确认杨辉三角形的具体格子上的数字值,采用闭包保存缓存map
 * @param numRows 行
 * @param numCols 列
 */
let getNumber: (numRows: number, numCols: number) => number = (function() {
  const map = {};
  return  function(numRows: number, numCols: number):  number{
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
        return 1
      }
      map[key] = getNumber(numRows - 1, numCols -1) + getNumber(numRows -1, numCols);
      return map[key];
    }
  }
})()
