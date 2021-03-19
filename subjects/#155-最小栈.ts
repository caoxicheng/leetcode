class MinStack {
  private _stack: Array<number>
  private _minStack: Array<number>

  constructor() {
    this._stack = [];
    this._minStack = [];
  }

  public pop(): void {
    let value = this._stack.pop();
    if (value === this.getMin()) {
      this._minStack.pop();
    }
  }

  public push(x: number): void {
    this._stack.push(x);
    if (this._minStack[0] === void 0 || x <= this._minStack[this._minStack.length - 1]) {
      this._minStack.push(x);
    }
  }

  public top(): number {
    return this._stack[this._stack.length - 1];
  }

  public getMin(): number {
    return this._minStack[this._minStack.length - 1];
  }
}

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/