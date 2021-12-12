// demonstrates how to use context API to update the global state 

import React, { useState, useContext } from 'react'
import { MovieContext } from './MovieContext'



const AddMovie = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = (e) => {
        setName(e.target.value)
    }
    
    const updatePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Destructure previous context items and add new
        setMovies([...movies, {name: name, price: price}])
        setName('')
        setPrice('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder='Add movie name' value={name} onChange={updateName}/>
            <input type="text" name='price' placeholder='Add movie price' value={price} onChange={updatePrice}/>
            <button>Submit</button>
        </form>
    )
}

export default AddMovie;
