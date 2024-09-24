const sql = require("mssql");
const config = require("../config/dbconfig");

// Insert/Update the Order details.
// If the Order.order_id is 0 then Innsert
// If the Order.order_id is any valid id then delete and insert new bunch of order and order items.
async function createOrder(Order) {
  try {
    let pool = await sql.connect(config);
    let upcertOrder = await pool
      .request()
      .input("order_id", sql.Int, Order.order_id)
      .input("products", sql.VarChar, Order.products)      
      .execute("create_order");
      // console.log(upcertOrder.returnValue);
    return upcertOrder.returnValue;
  } catch (error) {
    console.log("Error From createOrder :", error);
    throw error;
  }
}

module.exports = { createOrder };
