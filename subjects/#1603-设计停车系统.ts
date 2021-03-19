class ParkingSystem {
  private bigNums: number;
  private mediumNums: number;
  private smallNums: number;

  private currentBig: number = 0;
  private currentMedium: number = 0;
  private currentSmall: number = 0;

  constructor(big: number, medium: number, small: number) {
    this.bigNums = big;
    this.mediumNums = medium;
    this.smallNums = small;  
  }

  
  addCar(carType: 1 | 2 | 3): boolean {
    switch (carType) {
      case 1:
        if (this.currentBig < this.bigNums) {
          ++this.currentBig;
          return true;
        } else {
          return false;
        }
      case 2:
        if (this.currentMedium < this.mediumNums) {
          ++this.currentMedium;
          return true;
        } else {
          return false;
        }
      case 3:
        if (this.currentSmall < this.smallNums) {
          ++this.currentSmall;
          return true;
        } else {
          return false;
        }
      default:
        new Error('请输出正确的车辆类型');
        return false;
    }
  }
}

/**
* Your ParkingSystem object will be instantiated and called as such:
* var obj = new ParkingSystem(big, medium, small)
* var param_1 = obj.addCar(carType)
*/