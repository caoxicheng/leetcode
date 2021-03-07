/**
 * 一次遍历，确定最小值，然后判断是否有赚钱价值，一次比较
 * @param prices 
 */
function maxProfit(prices: number[]): number {
  let minPrice: number = Infinity;
  let maxPrice: number = 0;
  for (let index = 0; index < prices.length; index++) {
    if (prices[index] < minPrice) {
      minPrice = prices[index];
    } else if ( maxPrice < (prices[index] - minPrice)) {
      maxPrice = prices[index] - minPrice;
    }
  }
  return maxPrice;
};