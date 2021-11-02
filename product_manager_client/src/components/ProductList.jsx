import axios from 'axios';
import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import {AiFillDelete} from 'react-icons/ai';

const listStyle ={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: "70%",
    textAlign:"left",
    margin: "0 auto"
}
const linkTagStyle={
    textDecoration: "none",
    cursor: "pointer",
    color: "#3f51b5",
    flex: 1

}
const productListStyle = {
    border: "solid 2px #757de8",
    padding: "2rem",
    margin: "2rem",
    borderRadius: "20px"

}
const ProductList = ({productList, setProductList}) => {
   
    const onClickDelete = (productId) => {
        axios.delete("http://localhost:8000/api/products/"+productId)
        .then(res => {
            setProductList(productList.filter(product => product._id !== productId))
        })
        .catch(err => console.error(err));
    }
    return (
        <div style={productListStyle}>
            <h1 style={{color: "#002984"}}>Product List</h1>
            <List
            sx={{ width: '100%', bgcolor: 'background.paper' }}
            aria-label="contacts"
                  >
                {productList.map(product => {
                return <div key={product._id} style={listStyle}>
                    <a style={linkTagStyle} href={'/api/products/'+product._id}>{product.title}</a>
                    <IconButton edge="end" aria-label="comments" onClick={(e) =>onClickDelete(product._id)}>
                            <AiFillDelete size={36}/>
                    </IconButton>
                </div>
                })}
            </List>
        </div>
    );
};

export default ProductList;