import axios from "axios";
import "./App.css";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
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
  console.log(" list porduct", productList);
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <ProductForm
            productList={productList}
            setProductList={setProductList}
          />
          <ProductList
            productList={productList}
            setProductList={setProductList}
          />
        </Route>
        <Route path="/api/products/:id">
          <ProductDetail />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
