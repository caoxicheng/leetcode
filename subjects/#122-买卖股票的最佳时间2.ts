function maxProfit(prices: number[]): number {
  if (!prices || prices.length === 0) return 0;
  let arrow: boolean = undefined; //正向涨
  let currentPrice: number = undefined; // 当前成本
  let maxPrice: number = 0;
  for (let index = 1; index < prices.length; index++) {
    if (arrow === void 0) {
      // 判断是📈还是📉
      arrow = prices[index] > prices[index - 1];
      if (arrow === true) {
        currentPrice = prices[index - 1];
        continue;
      }
    }
    if (arrow === true && currentPrice !== void 0 && prices[index] <= prices[index - 1]) {
      // 📈，已买入，今天价格小于昨日价格
      // 卖出,价格致空
      maxPrice += (prices[index - 1] - currentPrice);
      console.log(`----卖出${prices[index -1] - currentPrice}----`);
      currentPrice = undefined;
    } else if (arrow !== true && currentPrice === void 0 && prices[index] > prices[index - 1]) {
      // 📉，未买，今日价格大于昨日价格
      // 买入
      currentPrice = prices[index - 1];
      console.log(`当前价格${prices[index]},上次价格${prices[index - 1]}`)
    }
    arrow = prices[index] > prices[index - 1]; // 更新涨跌
    console.log(`第${index}循环较前一日价格为, ${arrow ? '📈' : '📉'}, 目前总收益为: ${maxPrice}`);
  }

  if (currentPrice !== void 0) {
    maxPrice += (prices[prices.length - 1] - currentPrice);
  }
  return maxPrice;
};


// maxProfit([5,2,3,2,6,6,2,9,1,0,7,4,5,0]);