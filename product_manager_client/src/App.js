import axios from "axios";
import "./App.css";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import EditProduct from "./components/EditProduct";
function App() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setProductList(res.data.products);
      })
      .catch((err) => console.error(err));
  }, []);
  const createProduct = product => {
        axios.post("http://localhost:8000/api/products", product)
        .then((res) => {
            setProductList([...productList, res.data.product])
        })
        .catch((err) => console.log(err));
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <ProductForm
            onProductSubmit={createProduct}
            initialProduct={{title: "",
            price: "",
            description: ""}}
          />
          <ProductList
            productList={productList}
            setProductList={setProductList}
          />
        </Route>
        <Route exact path="/api/products/:id">
          <ProductDetail />
        </Route>
        <Route path="/api/products/:id/edit">
          <EditProduct />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
