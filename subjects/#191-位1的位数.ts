function hammingWeight(n: number): number {
  let binaryNum: string = n.toString(2);
  let numList: Array<string> = binaryNum.split('');
  return numList.reduce( (accumulator, currentValue) => {
    if (currentValue == '1') {
      accumulator += 1;
    }
    return accumulator;
  }, 0);
};