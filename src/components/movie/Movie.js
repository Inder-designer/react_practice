import React from 'react'
import './movie.css'
import Movies from './movies'
import MovieItem from './movie_item'
import UseStateHook from './usestate/UseState'

const Movie = () => {
    let login = false;
  return (
    <div>
        <h1>Movie Review</h1>
        {
            login == false ? <h5>Hello</h5> : <></>
        }
        <div style={{display: "flex",flexWrap:"wrap",padding:"20px", gap:"2%"}}>
            {
                Movies.map((element,index) => {
                    return(
                        <MovieItem title={element.Title} poster={element.Poster} year={element.Year} key={index} />
                    )
                })
            }
        </div>
        <h1>UseState Hook</h1>
        <UseStateHook/>
    </div>
  )
}

export default Movie