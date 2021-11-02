const ProductController = require("../controllers/product.controller");
module.exports = function (app) {
  app.get("/api/products", ProductController.index);
  app.post("/api/products", ProductController.createProduct);
};
