import axios from 'axios';
import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteButton from './DeleteButton';
import {FaEdit} from 'react-icons/fa';


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
   
const removeFromProductList = productId => {
    setProductList(productList.filter(product => product._id !== productId))
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
                    <IconButton edge="end" aria-label="comments">
                         <Link to={"/api/products/"+product._id+"/edit"}><FaEdit size={36} style={{color: "cornflowerBlue"}}/></Link>
                    </IconButton>
                    <IconButton edge="end" aria-label="comments">
                            <DeleteButton productId={product._id } successCallback={() => removeFromProductList(product._id)}/>
                    </IconButton>
                </div>
                })}
            </List>
        </div>
    );
};

export default ProductList;