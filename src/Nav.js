import React, { useContext } from 'react'
import './Nav.css'
import { MovieContext } from './MovieContext';


const Nav = () =>  {

    const [movies, setMovies] = useContext(MovieContext)

    return (
        <div>
            <h3 className='hee'>Dev GS</h3>
            <p className='pee'>List of Movies: {movies.length}</p>
        </div>
    )
}

export default Nav;