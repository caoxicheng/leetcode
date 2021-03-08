/**
 * 一次遍历，确定最小值，然后判断是否有赚钱价值，一次比较
 * @param prices 
 */
function maxProfit(prices: number[]): number {
  let minPrice: number = Infinity;
  let maxPrice: number = 0;
  for (let index = 0, price; index < prices.length; index++) {
    price = prices[index];
    minPrice = Math.min(minPrice, price);
    maxPrice = Math.max(maxPrice, price - minPrice);
  }
  return maxPrice;
};