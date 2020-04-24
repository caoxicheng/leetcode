// 现实生活中的工厂按照既定程序制造产品，随着生产原料和流程不同生产出来的产品也会有区别。

// 应用到软件工程的领域，工厂可以看成是一个制造其他对象的对象，

// 制造出的对象也会随着传入工厂对象参数的不同而有所区别。

// 什么场景适合应用工厂模式而不是直接 new 一个对象呢？

// 当构造函数过多不方便管理，且需要创建的对象之间存在某些关联（有同一个父类、实现同一个接口等）时，

// 不妨使用工厂模式。工厂模式提供一种集中化、统一化的方式，避免了分散创建对象导致的代码重复、灵活性差的问题。

function SuzukiCar(color) {
  this.color = color;
  this.brand = "Suzuki";
}

function HondaCar(color) {
  this.color = color;
  this.brand = "Honda";
}

function BMWCar(color) {
  this.color = color;
  this.brand = "BMW";
}

const BRANDS = {
  suzuki: 1,
  honda: 2,
  bmw: 3,
};

function CarFactory() {
  this.create = function (brand, color) {
    switch (brand) {
      case BRANDS.suzuki:
        return new SuzukiCar(color);
      case BRANDS.honda:
        return new HondaCar(color);
      case BRANDS.bmw:
        return new BMWCar(color);
      default:
        break;
    }
  };
}

const carFactory = new CarFactory();
const cars = [];

cars.push(carFactory.create(BRANDS.suzuki, "yellow"));
cars.push(carFactory.create(BRANDS.honda, "red"));
cars.push(carFactory.create(BRANDS.bmw, "white"));

function say() {
  console.log(`Hi, I am a ${this.brand} ${this.color} car`);
}

for (const car of cars) {
  say.call(car);
}
