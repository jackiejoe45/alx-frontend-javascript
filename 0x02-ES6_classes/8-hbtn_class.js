/*
Implement a class named HolbertonClass:

Constructor attributes:
size (Number)
location (String)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
When the class is cast into a Number, it should return the size.
When the class is cast into a String, it should return the location.
*/
export default class HolbertonClass {
  constructor(size = '', location = '') {
    this.size = size;
    this.location = location;
  }

  [Symbol.toPrimitive](dataType) {
    if (dataType === 'string') {
      return `${this.location}`;
    }
    if (dataType === 'number') {
      return `${this.size}`;
    }
    return `${this.location}`;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    if (typeof value !== 'number') {
      throw new TypeError('size must be a number');
    }
    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    if (typeof value !== 'string') {
      throw new TypeError('size must be a string');
    }
    this._location = value;
  }
}
