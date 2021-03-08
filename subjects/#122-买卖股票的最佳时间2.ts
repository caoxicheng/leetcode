function maxProfit(prices: number[]): number {
  let ans = 0
  for (let i = 1, l = prices.length; i < l; i++) {
    ans += Math.max(0, prices[i] - prices[i - 1])
  }
  return ans;
};