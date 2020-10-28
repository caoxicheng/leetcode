function romanToInt(s: string): number {
  let result: number = 0;
  let tempArr: Array<string> = [...s];
  tempArr.forEach((x, index) => {
    let symbol: number = 1;
    switch (x) {
      case "I":
        if (tempArr[index + 1] === 'V' || tempArr[index + 1] === 'X') {
          symbol = -symbol;
        }
        result += symbol*1;
        break;
      case "V":
        result += 5;
        break;
      case "X":
        if (tempArr[index + 1] === 'L' || tempArr[index + 1] === 'C') {
          symbol = -symbol;
        }
        result += symbol*10;
        break;
      case "L":
        result += 50;
        break;
      case "C":
        if (tempArr[index + 1] === 'D' || tempArr[index + 1] === 'M') {
          symbol = -symbol;
        }
        result += symbol*100;
        break;
      case "D":
        result += 500;
        break;
      case "M":
        result += 1000;
        break;
    }
  });
  return result;
}
