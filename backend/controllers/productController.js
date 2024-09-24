const productservice = require("../services/productService");
const product = require("../models/product");

async function getProducts(req, res) {
  // const name = req.query.keyword?req.query.keyword:"";
  await productservice
    .getProducts(req.query.keyword)
    .then((result) => {
      res.json({ success: true, products: result[0] });
    })
    .catch((error) => {
      res.json({ success: false, message: error.message });
    });
}

async function getProductById(req, res) {
  await productservice
    .getProductById(req.params.id)
    .then((result) => {
      res.json({ success: true, product: result[0] });
    })
    .catch((error) => {
      res.json({ success: false, message: error });
    });
}

async function upcertProduct(req, res) {
  let product = { ...req.body };
  await productservice
    .upcertProduct(product)
    .then((result) => {
      res.json({ success: true, message: result[0] });
    })
    .catch((error) => {
      res.json({ success: false, message: error });
    });
}

async function deleteProductById(req, res) {
  await productservice
    .deleteProductById(req.params.id)
    .then((result) => {
      res.json({ success: true, message: result[0] });
    })
    .catch((error) => {
      res.json({ success: false, message: error });
    });
}

module.exports = {
  getProducts,
  getProductById,
  upcertProduct,
  deleteProductById,
};
