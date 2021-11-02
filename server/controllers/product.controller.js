const Product = require("../models/product.model");

module.exports.index = (req, res) => {
  Product.find()
    .then((allProducts) => res.json({ products: allProducts }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
module.exports.getOneProduct = (req, res) => {
  console.log(req.params.id, " this is id from url");
  Product.findOne({ _id: req.params.id })
    .then((oneProduct) => res.json({ product: oneProduct }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createProduct = (req, res) => {
  console.log(" request body", req.body);
  Product.create(req.body)
    .then((product) => res.json({ product }))
    .catch((err) => res.json(err));
};
