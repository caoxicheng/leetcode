var climbStairs = (function() {
  let Map = {
    0: 1,
    1: 1,
  };

  return function innerFunction(n: number): number {
    if (Map[n] !== void 0) {
      return Map[n]
    }
    
    let temp = climbStairs(n - 1) + climbStairs(n - 2)
    Map[n] = temp;
    return temp;
  }
})()