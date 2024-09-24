class product {
  constructor(
    id,
    name,
    model,
    price,
    description,
    ratings,
    category,
    seller,
    stock,
    imagepath
  ) {
    this.id = id;
    this.name = name;
    this.model = model;
    this.price = price;
    this.description = description;
    this.ratings = ratings;
    this.category = category;
    this.seller = seller;
    this.stock = stock;
    this.imagepath = imagepath;
  }
}

module.exports = product;
