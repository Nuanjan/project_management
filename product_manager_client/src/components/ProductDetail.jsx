import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const detailStyle= {
    display:"flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "50%",
    margin: "1rem auto",
    border: "solid 2px black",
    padding: "1rem",
    borderRadius: "20px"
}
const iconStyle={
    alignSelf: "flex-end"
}
const ProductDetail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({})
  useEffect(() => {
      axios.get('http://localhost:8000/api/products/'+id)
      .then(res => {
       setProduct(res.data.product)
      })
  }, [])
    return (
    <div style={detailStyle}>
        <div>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <a href={'/'}>Go Back</a>
        </div>
    </div>
    );
};

export default ProductDetail;