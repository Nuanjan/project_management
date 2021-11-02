import axios from 'axios';
import React, { useEffect, useState } from 'react';

const productContainerStyle ={
    marginTop: "3rem",
    display: 'flex',
    flexDirection: "column"
}

const ProductList = ({productChange}) => {
    const [productList, setProductList] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res => {setProductList(res.data.products)})
    },[productChange])
    console.log(productList)
    return (
        <div style={productContainerStyle}>
            {productList.map(product => {
            return <a key={product._id} href={'/api/products/'+product._id}>{product.title}</a>
            })}
        </div>
    );
};

export default ProductList;