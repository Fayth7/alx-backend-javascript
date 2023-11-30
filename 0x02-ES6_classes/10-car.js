const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    const clonedCar = new this.constructor();
    Object.getOwnPropertyNames(this).forEach((prop) => {
      clonedCar[prop] = this[prop];
    });
    clonedCar[cloneSymbol] = true;
    return clonedCar;
  }
}
