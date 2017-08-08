import React, {Component} from 'react'
import MovieListMovie from 'movie_list_item'

const MovieList = (props) => {
    const movieItems =props.movies.map(movie => {
        return (
            <MovieListItem 
            onMoiveSelect = {props.onMoiveSelect}
            key={movie.year}
            movie ={movie}
            />
        )
    })
    return (
        <ul className ='col-md-4 list-group'>
            {movieItems}
            </ul>
    )
}

export default MovieList 
