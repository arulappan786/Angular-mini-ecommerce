const express = require("express");
const productcontroller = require("../controllers/productController");

const router = express.Router();

router.route("/products").get(productcontroller.getProducts);
router.route("/products/:id").get(productcontroller.getProductById);
router.route("/products").post(productcontroller.upcertProduct);
router.route("/products").put(productcontroller.upcertProduct);
router.route("/products/:id").delete(productcontroller.deleteProductById);

module.exports = router;
