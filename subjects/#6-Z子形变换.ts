function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }
  let zigzag: Array<any> = [];
  
  for(let index = 0; index < numRows; index++) {
    zigzag.push([]);
  }

  let row: number = 0, col: number = 0;
  for (let index = 0; index < s.length; index++) {
    let element = s[index];
    if ( col % (numRows - 1) === 0) {
      zigzag[row++][col] = element;
      if (row === numRows) {
        col++;
        row=0;
      }
    } else {
      row = (numRows - 1) - (col % (numRows - 1));
      zigzag[row][col++] = element;
      row = 0;
    }
  }
  
  let result = '';
  zigzag.forEach( row => {
    result += row.join('')
  })
  return result
};