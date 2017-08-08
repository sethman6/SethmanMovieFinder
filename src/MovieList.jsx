import React from 'react'
import MovieDetails from './MovieDetails'
import MovieListItem from './movie_list_item'

const ListMovie = (props) => {
    return (
        { props.movies.map((movie) => movieDiv(movie)) }
        // < li onClick= {() => onMovieSelect(movie)} className = 'List-Movies' />

    )
}

function movieDiv(movie) {
    return (
        <button onClick=<MovieDetails movie={movie} >{movie.title}</div>
    )
}

export default ListMovie