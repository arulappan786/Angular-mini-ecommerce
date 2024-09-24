const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require('cors');

const app = express();

dotenv.config({ path: path.join(__dirname, "config", "config.env") });

const products = require("./routes/productRouter");
const orders = require("./routes/orderRouter");

app.use(express.json());
app.use(cors());
app.use("/api/v1/", products);
app.use("/api/v1/", orders);

app.listen(process.env.PORT, () => {
  console.log(
    `Server listening to port ${process.env.PORT} for ${process.env.NODE_ENV}`
  );
});
