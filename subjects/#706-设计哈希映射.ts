class MyHashMap {
  private _: Object;
  constructor() {
    this._ = Object.create(null);
  }

  put(key: number, value: number): void {
    this._[key] = value;
  }

  get(key: number): number {
    let result = this._[key];

    return result === void 0 ? -1 : result;
  }

  remove(key: number): void {
    delete this._[key];
  }
}

/**
* Your MyHashMap object will be instantiated and called as such:
* var obj = new MyHashMap()
* obj.put(key,value)
* var param_2 = obj.get(key)
* obj.remove(key)
*/