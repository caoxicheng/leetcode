function convertToTitle(columnNumber: number): string {
  let result: string = ''
  while (columnNumber >= 1) {
    columnNumber--;
    result += String.fromCharCode(65 + (columnNumber % 26));
    columnNumber /= 26;
  }
  return result.split('').reverse().join('');
};