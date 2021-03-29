function reverseBits(n: number): number {
  let bitNumber = n.toString(2);
  let reverseArray = new Array(32).fill(0);
  bitNumber.split('').reverse().forEach( (x, index) => {
    reverseArray[31 - index] = x;
  })
  return parseInt(reverseArray.reverse().join(''), 2);
};