function reverse(x: number): number {
  let symbol: boolean = x >= 0 ? true : false;

  let tempArray: Array<string> = x.toString().split('');
  if (!symbol) {
    tempArray.splice(0, 1);
  }
  tempArray.reverse();
  let tempString: string = tempArray.join('');
  let tempInt: number = parseInt(tempString);
  if (!symbol) {
    tempInt = tempInt * -1;
  }

  if (tempInt > (Math.pow(2, 31) - 1) || tempInt < -Math.pow(2, 31)) {
    tempInt = 0;
  }

  return tempInt;
};