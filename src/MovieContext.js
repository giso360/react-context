import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([
        {
            name: "Harry Potter",
            price: "$10",
            id: 23124
        },
        {
            name: "Top Gun",
            price: "$10",
            id: 222344
        },
        {
            name: "Inception",
            price: "$10",
            id: 2324255
        },
        {
            name: "Matrix",
            price: "$10",
            id: 232425500
        }
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );

}