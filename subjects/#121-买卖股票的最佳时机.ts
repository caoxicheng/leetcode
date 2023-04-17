/**
 * 一次遍历，确定最小值，然后判断是否有赚钱价值，一次比较
 * @param prices
 */
// function maxProfit(prices: number[]): number {
//   let minPrice: number = Infinity;
//   let maxPrice: number = 0;
//   for (let index = 0, price; index < prices.length; index++) {
//     price = prices[index];
//     minPrice = Math.min(minPrice, price);
//     maxPrice = Math.max(maxPrice, price - minPrice);
//   }
//   return maxPrice;
// };

class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  // 将元素压入堆栈
  push(element: T): void {
    this.items.push(element);
  }

  // 弹出堆栈顶部的元素
  pop(): T | undefined {
    return this.items.pop();
  }

  // 查看堆栈顶部的元素
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  // 查看堆栈底部的元素
  front(): T | undefined {
    return this.items[0];
  }

  // 检查堆栈是否为空
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // 返回堆栈中的元素个数
  size(): number {
    return this.items.length;
  }

  // 清空堆栈
  clear(): void {
    this.items = [];
  }
}

function maxProfit(prices: number[]): number {
  let ans: number = 0;
  let index: number = 0;
  prices.push(-1);
  const stack: Stack<number> = new Stack();
  while (index < prices.length) {
    if (prices[index] === -1) {
      return ans = stack.peek() - stack.front() > ans ? stack.peek() - stack.front() : ans;
    } else if (stack.isEmpty()) {
      stack.push(prices[index++]);
    } else if (prices[index] > stack.peek()) {
      stack.push(prices[index++]);
    } else if (prices[index] < stack.peek()) {
      while (!stack.isEmpty() && prices[index] < stack.peek()) {
        let current: number =  stack.pop();
        if (!stack.isEmpty()){
          ans = current - stack.front() > ans ? current - stack.front() : ans;
        }
      }
      stack.push(prices[index]);
      index++;
    } else {
      index++;
    }
  }
  return ans;
};
