function titleToNumber(columnTitle: string): number {
  let len = columnTitle.length - 1;
  let radix = 1;
  let sum = 0;
  while (len >= 0) {
    // 这里在实践中发现，如果用循环内的临时变量，比在循环外初始化，速度快，猜测是因为需要通过作用域找寻变量，而花费了多余时间？
    let temp = columnTitle.charCodeAt(len) - 64;
    sum += temp * radix;
    len--;
    radix *= 26;
  }
  return sum;
};