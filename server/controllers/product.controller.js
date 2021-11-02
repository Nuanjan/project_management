const Product = require("../models/product.model");

module.exports.index = (req, res) => {
  Product.find()
    .then((allProducts) => res.json({ products: allProducts }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
module.exports.getOneProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((oneProduct) => res.json({ product: oneProduct }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
module.exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then((product) => res.json({ product }))
    .catch((err) => res.json(err));
};
module.exports.updateProduct = (req, res) => {
  console.log(req.params.id, " this is id");
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedProduct) => res.json(updatedProduct))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
module.exports.deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then((result) => res.json(result))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
