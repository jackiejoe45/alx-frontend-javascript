/*
Import the class Currency from 3-currency.js

Implement a class named Pricing:

Constructor attributes:
amount (Number)
currency (Currency)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
Implement a getter and setter for each attribute.
Implement a method named displayFullPrice that returns
the attributes in the following format amount currency_name (currency_code).
Implement a static method named convertPrice. It should accept
two arguments: amount (Number), conversionRate (Number).
The function should return the amount multiplied by the conversion rate.
*/
import Currency from './3-currency';

export default class Pricing {
  constructor(amount = 0, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  displayFullPrice() {
    const code = this.currency._code;
    const name = this.currency._name;
    const money = `${this.amount} ${name} (${code})`;

    return money;
  }

  static convertPrice(amount = 0, conversionRate = 0) {
    if (typeof amount !== 'number') {
      throw TypeError('amount must be a string');
    }
    if (typeof conversionRate !== 'number') {
      throw TypeError('conversioRate must be a string');
    }
    return amount * conversionRate;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('amount must be a Number');
    }
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('currency value must be in currency format');
    }
    this._currency = newCurrency;
  }
}
