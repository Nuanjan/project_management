import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductDetail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({})
  useEffect(() => {
      axios.get('http://localhost:8000/api/products/'+id)
      .then(res => {
          console.log(res.data)
          setProduct(res.data.product)
      })
  }, [])
    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <a href={'/'}>Go Back</a>
        </div>
    );
};

export default ProductDetail;