import React, {useState} from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
const boxStyle={
    marginTop: '2rem'

}
const ProductForm = ({setProductChange}) => {
    const [input, setInput] = useState({
        title: "",
        price: "",
        description: ""
    })

    const onProductSubmit = (e) => {
        e.preventDefault();
        console.log(" form sub mited")
        console.log(input)
        setProductChange({...input})
        axios.post("http://localhost:8000/api/products", input)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }

    return (
        <form style={boxStyle} onSubmit={onProductSubmit} >
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
            value={input.price}
            onChange={(e) => setInput({...input, [e.target.name]: e.target.value})}
            sx={{mb: '20px'}}
            />
            <TextField
            id="description"
            name="description"
            label="Description"
            value={input.description}
            onChange={(e) => setInput({...input, [e.target.name]: e.target.value})}
            sx={{mb: '20px'}}
            />
            <Button variant="contained" color="primary" type="submit">Create</Button>
        </FormControl>
      </form>
    );
};

export default ProductForm;