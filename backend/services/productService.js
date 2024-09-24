const sql = require("mssql");
const config = require("../config/dbconfig");

// Get All the products.
async function getProducts(name = "") {
  try {
    let wildchar = "%";
    let query =
      name === undefined || name == null || name.length <= 0
        ? "select * from [dbo].[product]"
        : `select * from [dbo].[product] where name like '${wildchar}${name}${wildchar}'`;
    let pool = await sql.connect(config);
    let products = await pool.request().query(query);
    return products.recordsets;
  } catch (error) {
    console.log("Error From getProducts :", error);
    throw error;
  }
}

// Get single product by product id.
async function getProductById(id) {
  try {
    let pool = await sql.connect(config);
    let product = await pool
      .request()
      .input("id", sql.Int, id)
      .query("select * from [dbo].[product] where Id = @id");
    return product.recordsets;
  } catch (error) {
    console.log("Error From getProductById :", error);
    throw error;
  }
}

// Insert/Update the product details.
// If the Product.Id is 0 then Innsert
// If the Product.Id is any valid id then update.
async function upcertProduct(Product) {
  try {
    let pool = await sql.connect(config);
    let product = await pool
      .request()
      .input("id", sql.Int, Product.id)
      .input("name", sql.VarChar, Product.name)
      .input("model", sql.VarChar, Product.model)
      .input("price", sql.Money, Product.price)
      .input("description", sql.VarChar, Product.description)
      .input("ratings", sql.Float, Product.ratings)
      .input("category", sql.VarChar, Product.category)
      .input("seller", sql.VarChar, Product.seller)
      .input("stock", sql.Int, Product.stock)
      .input("imagepath", sql.VarChar, Product.imagepath)
      .execute("upcert_product");
    return product.recordsets;
  } catch (error) {
    console.log("Error From upcertProduct :", error);
    throw error;
  }
}

// Delete a single product by product id.
async function deleteProductById(id) {
  try {
    let pool = await sql.connect(config);
    let product = await pool
      .request()
      .input("id", sql.Int, id)
      .query("delete from [dbo].[product] where Id = @id");
    return product.recordsets;
  } catch (error) {
    console.log("Error From deleteProductById :", error);
    throw error;
  }
}

module.exports = {
  getProducts,
  getProductById,
  upcertProduct,
  deleteProductById,
};
