function myAtoi(s: string): number {
  class Automaton{
    sign: 1 | -1;
    answer: number ;
    private state: 'start' | 'signed' | 'in_number'| 'end';
    private map: Map<'start' | 'signed' | 'in_number'| 'end', Array<'start' | 'signed' | 'in_number'| 'end'>>;
    constructor() {
      this.state = 'start';
      this.sign = 1;
      this.answer = 0;
      this.map = new Map([
        ['start', ['start', 'signed', 'in_number', 'end']],
        ['signed', ['end', 'end', 'in_number', 'end']],
        ['in_number', ['end', 'end', 'in_number', 'end']],
        ['end', ['end', 'end', 'end', 'end']]
      ])
    }

    getIndex(char: any): number {
      if (char == ' ') {
        return 0;
      } else if (char == '-' || char == '+'){
        return 1;
      } else if (typeof Number(char) === 'number' && !isNaN(char)) {
        return 2;
      } else {
        return 3;
      }
    }

    get(char: any) {
      this.state = this.map.get(this.state)[this.getIndex(char)];
      if(this.state === 'in_number') {
        /*
        小技巧：
        在JS中，对字符串类型进行减法操作，可以将得到一个数值型（Number）的值

        易错点：
        本处需要利用括号来提高四则运算的优先级
        */
        this.answer = this.answer * 10 + (char - 0);

        /*
        易错点：
        在进行负数比较时，需要将INT_MIN变为正数
        */
        this.answer = this.sign === 1 ? Math.min(this.answer, Math.pow(2, 31) - 1) : Math.min(this.answer, -Math.pow(-2, 31));
      } else if (this.state === 'signed') {
        /*
        优化点：
        对于一个整数来说，非正即负，
        所以正负号的判断，只需要一次。
        故，可以降低其判断的优先级
        */
        this.sign = char === '+' ? 1 : -1;
      }
    }
  }

  // 生成自动机实例
  let automaton = new Automaton();

  // 遍历每个字符
  for(let char of s) {
    // 依次进行转换
    automaton.get(char);
  }

  // 返回值，整数 = 正负 * 数值
  return automaton.sign * automaton.answer;
}

myAtoi('41')
