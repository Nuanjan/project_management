import React, { useEffect, useState } from 'react';
import { useParams, useHistory} from 'react-router-dom';
import axios from 'axios';
import ProductForm from './ProductForm';
const EditProduct = () => {
    const history = useHistory()
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [isLoaded, setIsloaded] = useState(false);
    useEffect(() => {
        console.log("use effect run")
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data.product);
                setIsloaded(true)
            })
    }, []);
    console.log(product)
    const updateProduct = product => {
        axios.put('http://localhost:8000/api/products/' + id, product)
            .then(res => {
                console.log(res)
            });
    }
    return (
        <div>
            {isLoaded && <ProductForm
             onProductSubmit={updateProduct}
             initialProduct={product}
             />}
        </div>
    );
};

export default EditProduct;