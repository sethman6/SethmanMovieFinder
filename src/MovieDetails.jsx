import React from 'react'

const MovieDetail = (props) => {
    return (

        <div>
            <h1>{props.Title} </h1>
            <h2>{props.Plot} </h2>
            <h3>{props.Actors} </h3>

        </div>
    )
}

export default MovieDetail