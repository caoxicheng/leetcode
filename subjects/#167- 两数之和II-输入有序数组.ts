function twoSum(numbers: number[], target: number): number[] {
  let end:number = numbers.length;

  while (end >=0) {
    let start = numbers.slice(0, end).indexOf((target - numbers[end]));
    if (start !== -1) {
      return [start + 1, end + 1];
    }
    --end;
  }
};