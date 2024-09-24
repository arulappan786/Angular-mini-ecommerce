const Orderservice = require("../services/orderService");
const order = require("../models/order");

async function createOrder(req, res) {
  let order = { ...req.body };
  await Orderservice.createOrder(order)
    .then((result) => {      
      res.json({ success: true, orderid: result });
    })
    .catch((error) => {
      res.json({ success: false, message: error });
    });
}

module.exports = { createOrder };
