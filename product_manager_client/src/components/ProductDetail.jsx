import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {FaEdit} from 'react-icons/fa';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
    const [input, setInput] = useState({})
    const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
      axios.get('http://localhost:8000/api/products/'+id)
      .then(res => {
       setInput(res.data.product)
          setIsEdit(false)
      })
  }, [product])
  const onUpdateProductSubmit = (e) => {
        e.preventDefault();
        console.log(input)
        axios.put("http://localhost:8000/api/products/"+id, input)
        .then((res) => {
            setIsEdit(false)
            setProduct({...input})
            console.log(product, " this is product")
            console.log(isEdit)
        })
        .catch((err) => console.log(err));
    }

  const onClickEdit = () => {
      setIsEdit(true)
  }
    return (
        <div style={detailStyle}>
        {isEdit ?
        <form onSubmit={onUpdateProductSubmit}>
        <FormControl sx={{ width: '25ch' }} > 
            <TextField
            id="title"
            name="title"
            value={input.title}
            label="Title"
            onChange={(e) => setInput({...input, [e.target.name]: e.target.value})}
            sx={{mb: '20px'}}
            />
            <TextField
            id="price"
            name="price"
            label="Price"
            onChange={(e) => setInput({...input, [e.target.name]: e.target.value})}
            value={input.price}
            sx={{mb: '20px'}}
            />
            <TextField
            id="description"
            name="description"
            label="Description"
            onChange={(e) => setInput({...input, [e.target.name]: e.target.value})}
            value={input.description}
            sx={{mb: '20px'}}
            />
            <Button variant="contained" color="primary" type="submit">Create</Button>
        </FormControl>
      </form>
           : <div>
                <div style={iconStyle}>
                    <FaEdit size={36} onClick={onClickEdit}/>
                </div>
                <h2>{input.title}</h2>
                <p>{input.price}</p>
                <p>{input.description}</p>
                <a href={'/'}>Go Back</a>
            </div>
}
        </div>
    );
};

export default ProductDetail;