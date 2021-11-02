import logo from "./logo.svg";
import "./App.css";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState } from 'react';
function App() {
  const [productChange, setProductChange] = useState({});
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <ProductForm setProductChange={setProductChange} />
          <ProductList productChange={productChange} />
        </Route>
        <Route path="/api/products/:id">
          <ProductDetail />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
