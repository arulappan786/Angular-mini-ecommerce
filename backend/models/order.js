class order {
  constructor(order_id, products, order_date, order_status) {
    this.order_id = order_id;
    this.products = products;
    this.order_date = order_date;
    this.order_status = order_status;
  }
}

module.exports = order;
