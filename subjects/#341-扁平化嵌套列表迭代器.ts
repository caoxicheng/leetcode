interface NestedInteger {
  isInteger(): boolean;

  getInteger(): number | null;

  setInteger(value: number): void;

  add(elem: NestedInteger): void;

  getList(): NestedInteger[];
}

class NestedIterator {
  private _: number[] = [];

  constructor(nestedList: NestedInteger[]) {
    this.inverter(nestedList);
  }

  private inverter(nestedList: NestedInteger[]) {
    for (const nest of nestedList) {
      if (nest.isInteger()) {
        this._.push(nest.getInteger());
      } else {
        this.inverter(nest.getList());
      }
    }
  }

  hasNext(): boolean {
    return this._.length > 0;
  }

  next(): number {
    const result = this._[0];
    this._ = this._.splice(1);
    return result;
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new NestedIterator(nestedList)
 * var a: number[] = []
 * while (obj.hasNext()) a.push(obj.next());
 */
