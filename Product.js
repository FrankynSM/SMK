/**
 * Product Class
 */
export class Product {
 /**
  *
  * @param {string} name The Product Name
  * @param {number} price The Product Price
  * @param {number} disc The discount of Product
  * @param {number} pay The value to pay
  */
 constructor(name, price, disc) {
  var discount = (price * disc) / 100
  this.name = name
  this.price = price
  this.discount = disc
  this.pay = price - discount
 }
}
