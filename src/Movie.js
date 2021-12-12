import React from 'react'

const Movie = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <p>{props.id}</p>
            <hr />
        </div>
    )
}

export default Movie;
